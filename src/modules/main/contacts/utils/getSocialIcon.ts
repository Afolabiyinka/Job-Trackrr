export const getSocialIcon = (
   url: string,
): "Linkedin" | "Github" | "Twitter" | "Instagram" | "Facebook" | "Youtube" | "Dribbble" | "Figma" | "Slack" | "Globe" => {
   const value = url.toLowerCase();

   if (value.includes("linkedin")) return "Linkedin";
   if (value.includes("github")) return "Github";
   if (value.includes("twitter") || value.includes("x.com")) return "Twitter";
   if (value.includes("instagram")) return "Instagram";
   if (value.includes("facebook")) return "Facebook";
   if (value.includes("youtube")) return "Youtube";
   // if (value.includes("dribbble")) return "Dribbble";
   // if (value.includes("figma")) return "Figma";
   // if (value.includes("slack")) return "Slack";

   return "Globe";
};