"use client";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  Command,
  Globe,
  LinkIcon,
  Sparkles,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "@base-ui/react";

interface InitialData {
  businessName: string;
  websiteUrl: string;
  externalLinks: string;
}

const steps = [
  {
    id: "name",
    label: "Business Name",
    question: "What is the name of Your business",
    description: "This will be the identity of your AI assistant.",
    icon: Building2,
    placeholder: "e.g Acme Corp",
    type: "text",
    feild: "businessName" as keyof InitialData,
  },
  {
    id: "website",
    label: "website",
    question: "What is your website URL?",
    description: "We will scrape data from here to tarin your computer",
    icon: Globe,
    placeholder: "http//acme.com",
    type: "url",
    feild: "websiteUrl" as keyof InitialData,
  },
  {
    id: "links",
    label: "Extra Context",
    question: "Any other links to add?",
    description:
      "Add external links like Notion pages or Help docs to get the link",
    icon: LinkIcon,
    placeholder: "http//notion.so/docs",
    type: "textarea",
    badge: "Optional",
    feild: "externalLinks" as keyof InitialData,
  },
];
const InitialForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<InitialData>({
    businessName: "",
    websiteUrl: "",
    externalLinks: "",
  });

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const progress = ((currentStep + 1) / steps.length) * 100;

  const stepdata = steps[currentStep];
  const Icon = stepdata.icon;

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 300);
  }, [currentStep]);

  const handleNext = async () => {
    if (isSubmitting) return;
    const currenField = steps[currentStep].feild;
    const value = formData[currenField];

    if (currentStep < 2 && (!value || value.trim() === "")) return;

    if (currentStep < steps.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      handleSubmit();
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (steps[currentStep].type === "textarea") {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
      return;
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const response = await fetch("/api/metadata/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        business_name: formData.businessName,
        website_url: formData.websiteUrl,
        external_links: formData.externalLinks,
      }),
    });
    await response.json();
    setIsSubmitting(false);
    window.location.reload();
  };
  const isStepValid =
    currentStep >= 2 ||
    (formData[stepdata.feild] && formData[stepdata.feild].trim() !== "");

  return (
    <div className="w-full max-w-xl mx-auto min-h-[400px] flex flex-col justify-center ">
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5">
        <div
          className="h-full bg-indigo-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="fixed top-6 md:top-8 md:right-8 text-xs font-medium text-zinc-600 uppercase tracking-widest pointer-events-none fade-in">
        Setup your account
      </div>

      {isSubmitting ? (
        <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />
            <div className="relative w-16 mt-2 h-16 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-8 h-8 text-white animate-bounce" />
            </div>
          </div>
          <h2 className="text-2xl font-medium text-white mb-2">
            Storing your organization info!
          </h2>
          <p className="text-zinc-500">Scanning {formData.websiteUrl}...</p>
        </div>
      ) : (
        <>
          <div
            className={cn(
              "transition-all duration-300 ease-in-out transform",
              isAnimating
                ? "opacity-0 translate-y-4 scale-95"
                : "opacity-100 translate-y-0 scale-100",
            )}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2 items-center">
                {currentStep > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-full -ml-2 w-8 h-8"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                )}
                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
                  Step {currentStep + 1} of {steps.length}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                {stepdata.question}
              </h1>
              <p className="text-lg text-zinc-500 font-light">
                {stepdata.description}
              </p>
            </div>

            <div className="relative group">
              {stepdata.type === "textarea" ? (
                <Textarea
                  ref={inputRef as any}
                  value={formData[stepdata.feild] as string}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [stepdata.feild]: e.target.value,
                    })
                  }
                  onKeyDown={handleKeyDown}
                  placeholder={stepdata.placeholder}
                  className="w-full bg-transparent border-0 border-b shadow-none transition-colors border-white/10 text-green-300 text-md md:text-lg placeholder:text-zinc-600 focus:outline-none focus:ring-0 focus-visible:ring-0 min-h-30 rounded-none resize-none border-b-indigo-300 h-auto px-0 py-4 "
                  autoFocus
                />
              ) : (
                <Input
                  ref={inputRef as any}
                  type={stepdata.type}
                  value={formData[stepdata.feild] as string}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [stepdata.feild]: e.target.value,
                    })
                  }
                  onKeyDown={handleKeyDown}
                  placeholder={stepdata.placeholder}
                  className="w-full bg-transparent border-0 border-b border-white/10 text-green-300 text-md md:text-lg placeholder:text-zinc-600 focus:outline-none focus:ring-0 focus-visible:ring-0  border-b-indigo-300 h-auto px-0 py-4 transition-colors focus-visible:border-green-300"
                />
              )}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none">
                <Icon className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center justify-between pt-8">
              <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-600 ">
                {stepdata.type === "textarea" ? (
                  <>
                    <Command className="w-3 h-3" />
                    <span>+ Enter</span>
                  </>
                ) : (
                  <span>Press Enter</span>
                )}
                <span className="ml-1">to continue</span>
              </div>

              <Button
                onClick={handleNext}
                disabled={!isStepValid}
                className={cn(
                  "rounded-full px-8 py-6 font-medium transition-all duration-300",
                  !isStepValid
                    ? "bg-zinc-800 text-zinc-500 hover:bg-zinc-800 cursor-not-allowed"
                    : "bg-white text-black hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10",
                )}
              >
                {currentStep === steps.length - 1 ? "Submit" : "Continue"}
                {currentStep === steps.length - 1 ? (
                  <Sparkles className="w-4 h-4 ml-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InitialForm;
