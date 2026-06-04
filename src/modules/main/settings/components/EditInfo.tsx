import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, X } from "lucide-react";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { useUser } from "../store/useUser";
import { useEditUser } from "../hooks/useEditUser";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import SpinningLoader from "@/components/loader/spinningloader";

const EditInfo = () => {
  const { user } = useUser();
  const { editData, handleEdit, loading, setEditData } = useEditUser();
  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    if (user) setEditData(user);
  }, [user, setEditData]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleEdit();
  }

  function handleAddSkill() {
    const trimmed = skillInput.trim();
    if (!trimmed || editData?.skills.includes(trimmed)) return;
    setEditData({ ...editData, skills: [...editData.skills, trimmed] });
    setSkillInput("");
  }

  function handleRemoveSkill(skill: string) {
    setEditData({
      ...editData,
      skills: editData.skills.filter((s) => s !== skill),
    });
  }

  return (
    <Card className="shadow-none ring-0">
      <CardHeader>Edit Profile</CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">

            {/* Username */}
            <div className="space-y-1.5">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <CustomInput
                id="username"
                icon="User"
                placeholder="Username"
                type="text"
                value={editData.username}
                onChange={(e) => setEditData({ ...editData, username: e })}
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <CustomInput
                id="email"
                icon="Mail"
                placeholder="Email"
                type="text"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e })}
              />
            </div>

            {/* LinkedIn URL */}
            <div className="space-y-1.5">
              <Label htmlFor="linkedin" className="text-sm font-medium">
                LinkedIn URL
              </Label>
              <CustomInput
                id="linkedin"
                icon="Linkedin"
                placeholder="https://linkedin.com/in/yourname"
                type="text"
                value={editData.linkedinUrl}
                onChange={(e) => setEditData({ ...editData, linkedinUrl: e })}
              />
            </div>

            {/* Preferred Role */}
            <div className="space-y-1.5">
              <Label htmlFor="preferred-role" className="text-sm font-medium">
                Preferred Role
              </Label>
              <CustomInput
                id="preferred-role"
                icon="Briefcase"
                placeholder="e.g. Frontend Developer"
                type="text"
                value={editData.preferredRole}
                onChange={(e) => setEditData({ ...editData, preferredRole: e })}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <Label htmlFor="skill-input" className="text-sm font-medium">
              Skills
            </Label>
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <CustomInput
                id="skill-input"
                icon="Zap"
                placeholder="e.g. React, Node.js, Figma"
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e)}
              />
              <Button
                type="button"
                size={`lg`}
                // variant="outline"
                onClick={handleAddSkill}
                disabled={!skillInput.trim()}
              >
                Add
              </Button>
            </div>

            {editData.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {editData.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="flex items-center gap-1.5 px-3 p-4"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <Button size="lg" type="submit" disabled={loading}>
              <Save />
              {loading && <SpinningLoader />}
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditInfo;