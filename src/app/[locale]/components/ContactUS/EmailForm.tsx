"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ModalStatus } from "@/types";
import { cn } from "@/utils/style";
import AlertModal from "../modal/AlertModal";
import Button from "../ui/button";
import Divider from "../ui/divider";

interface EmailInputs {
  name: string;
  email: string;
  message: string;
  code: string;
  isVerified: boolean;
}

const RECAPTCHA_SITE_KEY = "6LftGZIrAAAAAKwcHWIlep_I8IOvfxW2XsIG0AwM";

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EmailInputs>({
    defaultValues: {
      message: "",
      email: "",
      code: "",
      isVerified: false,
      name: "",
    },
  });
  const formValues = watch();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [modalOpen, setModalOpen] = useState<ModalStatus | null>(null);

  const isEmpty = Object.values(formValues).some(
    (value) => value === "" || value == null || value === false,
  );
  const isDisabled = Object.keys(errors).length > 0 || isEmpty;

  const onSubmit: SubmitHandler<EmailInputs> = async (data) => {
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      console.log(recaptchaToken, data);
      // Do whatever you want with the token
      setModalOpen({
        type: "success",
        open: true,
      });
    } catch {
      setModalOpen({
        type: "error",
        open: true,
      });
    }
  };

  const handleClickVerify = async () => {
    const isValid = await trigger("email");

    if (!isValid) {
      return;
    }

    setIsCodeSent(true);
  };

  const handleCheckCode = () => {
    setValue("isVerified", true);
  };

  const handleOpen = (type: string) => (open: boolean) => {
    setModalOpen({
      type,
      open,
    });
  };

  return (
    <>
      <form
        className={cn(
          "flex w-full max-w-[585px] flex-col",
          "max-2xl:max-w-none",
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={cn(
            "mb-[20px] flex flex-col gap-[10px]",
            "max-md:mb-[20px] max-md:text-center",
          )}
        >
          <h4 className={cn("text-[20px] leading-[20px] font-semibold")}>
            Contact Us
          </h4>
          <span className={cn("text-[14px] text-black/40")}>
            서울모먼트는 감각적인 연결을 만들어갑니다.{" "}
            <br className="hidden max-md:inline" /> 당신의 이야기를 기다리고
            있습니다.
          </span>
        </div>
        <div
          className={cn(
            "flex items-center justify-center gap-[10px]",
            "mb-[40px] bg-black/5 p-[16px]",
            "rounded-[4px] text-[13px]",
            "max-md:mb-[20px] max-md:flex-col",
          )}
        >
          <span className="text-center text-black/60">
            ✉ 고객 응대 및 피드백
          </span>
          <Divider className="max-md:hidden" />
          <span className="text-center text-black/60">
            🤝  브랜드 제휴·유통 협력 (한/대만)
          </span>
          <Divider className="max-md:hidden" />
          <span className="text-center text-black/60">
            🎥  인플루언서 및 콘텐츠 파트너 제안
          </span>
        </div>
        <div className={cn("flex flex-col gap-[40px]")}>
          <div className={cn("flex flex-col gap-[30px]", "max-md:gap-[20px]")}>
            <div className="flex flex-col gap-[8px]">
              <input
                className={cn(
                  "rounded-[4px] border border-black/20 px-[12px] py-[16px]",
                  "text-[16px] leading-[16px]",
                  "placeholder:text-black/20",
                )}
                placeholder="Your Name"
                {...register("name", { required: "Please enter your name." })}
              />
              {errors.name && (
                <span className="text-error">{errors.name.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[8px]">
                <input
                  className={cn(
                    "flex-1 rounded-[4px] border border-black/20 px-[12px] py-[16px]",
                    "text-[16px] leading-[16px]",
                    "placeholder:text-black/20",
                  )}
                  placeholder="Please enter your email"
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />
                <Button
                  className="whitespace-pre max-md:leading-[16px]"
                  disabled={isCodeSent}
                  onClick={handleClickVerify}
                >
                  인증
                </Button>
              </div>
              {errors.email && (
                <span className="text-error">{errors.email.message}</span>
              )}
              {isCodeSent && (
                <span className="text-sent">
                  Verification code has been sent.
                </span>
              )}
            </div>
            {isCodeSent && (
              <>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[8px]">
                    <input
                      className={cn(
                        "flex-1 rounded-[4px] border border-black/20 px-[12px] py-[16px]",
                        "text-[16px] leading-[16px]",
                        "placeholder:text-black/20",
                      )}
                      placeholder="Please enter the verification code"
                      {...register("code", {
                        required: "Code is incorrect, Please check again.",
                      })}
                    />
                    <Button
                      className="whitespace-pre max-md:leading-[16px]"
                      disabled={!formValues.code}
                      onClick={handleCheckCode}
                    >
                      확인
                    </Button>
                  </div>
                </div>
                {formValues.isVerified && (
                  <span className="text-sent">
                    Email verified successfully.
                  </span>
                )}
              </>
            )}
            <div className="flex flex-col gap-[8px]">
              <textarea
                className={cn(
                  "h-[100px] rounded-[4px] border border-black/20 px-[12px] py-[16px]",
                  "resize-none rounded-[4px] text-[16px] leading-[16px]",
                  "placeholder:text-black/20",
                )}
                placeholder="Write your message(30 characters)"
                {...register("message", {
                  required: "Please enter your message.",
                  minLength: {
                    value: 30,
                    message: "Please enter at least 30 characters.",
                  },
                })}
              />
              {errors.message && (
                <span className="text-error">{errors.message.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Button
              className="p-[16px] font-semibold max-md:px-[20px] max-md:leading-[16px]"
              disabled={isDisabled}
              type="submit"
            >
              Send Message
            </Button>
            <span
              className={cn(
                "text-[14px] leading-[14px] text-black/40",
                "max-md:text-[12px] max-md:leading-[12px]",
              )}
            >
              This site is protected by reCAPTCHA and the Google Privacy Polict
              and Terms of Service apply.
            </span>
            <div
              className={cn(
                "flex justify-center",
                "max-2xl:justify-start",
                "max-md:justify-center",
              )}
            >
              <ReCAPTCHA
                onChange={setRecaptchaToken}
                onError={() => setRecaptchaToken(null)}
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                size="normal"
              />
            </div>
          </div>
        </div>
      </form>
      {modalOpen?.type === "success" && (
        <AlertModal
          onClickOK={() => {
            handleOpen("success")(false);
            reset();
          }}
          onOpenChange={handleOpen("success")}
          open={modalOpen?.open}
        >
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <Image alt="" height={40} src="/alert_complete.svg" width={40} />
            <p className="text-center">
              Your message has been sent <br />
              successfully. Thank you.
            </p>
          </div>
        </AlertModal>
      )}
      {modalOpen?.type === "error" && (
        <AlertModal
          onClickOK={() => handleOpen("error")(false)}
          onOpenChange={handleOpen("error")}
          open={modalOpen?.open}
        >
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <Image alt="" height={40} src="/alert_error.svg" width={40} />
            <p className="text-center">
              An error occurred while sending.
              <br />
              Please try again later.
            </p>
          </div>
        </AlertModal>
      )}
    </>
  );
}
