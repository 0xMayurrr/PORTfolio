import { useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RESUME_CONFIG } from "@/config/resume";

interface ResumeModalProps {
  variant?: "default" | "outline" | "secondary" | "brutal" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  buttonText?: string;
  showIcon?: boolean;
}

const ResumeModal = ({
  variant = "default",
  size = "lg",
  className = "",
  buttonText = "Resume",
  showIcon = true,
}: ResumeModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={`gap-2 font-mono group transition-all duration-300 ${className}`}
        >
          {showIcon && <FileText className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />}
          <span>{buttonText}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 border border-border bg-card shadow-2xl rounded-xl overflow-hidden z-50">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/80 bg-secondary/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 border border-primary/20 rounded-md text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-lg font-mono font-bold tracking-tight text-foreground flex items-center gap-2">
                {RESUME_CONFIG.title}
                <span className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded uppercase tracking-widest">
                  PDF v7
                </span>
              </DialogTitle>
              <DialogDescription className="text-xs font-mono text-muted-foreground mt-0.5">
                {RESUME_CONFIG.subtitle}
              </DialogDescription>
            </div>
          </div>

          <div className="flex items-center gap-2 mr-6">
            <a
              href={RESUME_CONFIG.path}
              download={RESUME_CONFIG.downloadName}
              className="hidden sm:inline-flex"
            >
              <Button size="sm" variant="default" className="gap-2 font-mono text-xs shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                <Download className="w-3.5 h-3.5" />
                Download
              </Button>
            </a>
            <a
              href={RESUME_CONFIG.path}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button size="sm" variant="outline" className="gap-2 font-mono text-xs">
                <ExternalLink className="w-3.5 h-3.5" />
                Fullscreen
              </Button>
            </a>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full h-full bg-muted/20 relative p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${RESUME_CONFIG.path}#toolbar=0`}
            className="w-full h-full rounded-lg border border-border/60 bg-background shadow-inner"
            title="Mayur P Resume PDF Preview"
          />
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-border/80 bg-secondary/20 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Latest Master SWE Resume v7 ready
          </span>

          <div className="flex items-center gap-3">
            <a href={RESUME_CONFIG.path} download={RESUME_CONFIG.downloadName}>
              <Button size="sm" variant="default" className="gap-2 font-mono text-xs">
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </Button>
            </a>
            <a href={RESUME_CONFIG.path} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="gap-2 font-mono text-xs">
                <ExternalLink className="w-3.5 h-3.5" />
                Open tab
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
