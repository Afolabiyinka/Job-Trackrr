import { motion } from "framer-motion";
import { X } from "lucide-react";

import { useOnboardingStore } from "../store/useOnboardingDetails";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "../hooks/useOnboarding";
import SpinningLoader from "@/components/loader/spinningloader";

const Step4 = () => {
  const {
    addSkill,
    removeSkill,
    setSkillInput,
    skillInput,
    skills,
    linkedinUrl,
    preferredRole,
  } = useOnboardingStore();
  const { handleOnboard, isPending } = useOnboarding();

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;
    addSkill(trimmed);
    setSkillInput("");
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await handleOnboard({
      linkedinUrl,
      preferredRole,
      skills,
    });
  }

  return (
    <motion.div
      className="w-full flex flex-col gap-10 justify-center items-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-4 h-px bg-muted-foreground/50" />
            Step 4 of 5
          </motion.div>

          <motion.h1
            className="text-2xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            What skills do you bring?
          </motion.h1>

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Add your top skills so we can match you with the right
            opportunities.
          </motion.p>
        </div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Label htmlFor="skill-input" className="text-sm font-medium">
            Skills
          </Label>

          <div className="flex gap-2 items-center">
            <CustomInput
              id="skill-input"
              icon="Zap"
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e)}
              placeholder="e.g. React, Node.js, Figma"
            />

            <Button
              type="button"
              size={`lg`}
              onClick={handleAddSkill}
              disabled={!skillInput.trim()}
            >
              Add
            </Button>
          </div>

          <p className="text-xs text-muted-foreground pl-0.5">
            Press
            <kbd className="px-1 py-0.5 rounded bg-muted text-muted-foreground text-xs font-mono">
              Enter
            </kbd>
            or click Add to insert a skill.
          </p>
        </motion.div>

        {/* Skill badges */}
        {skills.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.15 }}
              >
                <Badge className="flex items-center gap-1.5 p-4">
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:text-destructive transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="flex justify-between mt-4">
          <Button variant={`ghost`} size={`lg`}>
            Skip
          </Button>
          <Button size={`lg`}>
            {isPending ? <SpinningLoader /> : <>Continue</>}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default Step4;
