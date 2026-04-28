// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { countries } from "@/lib/countries";
// import ReactCountryFlag from "react-country-flag";
// import { Phone } from "lucide-react";

// interface PhoneInputProps {
//   value?: string;
//   onChange?: (value: string) => void;
// }

// export default function PhoneInput({ value, onChange }: PhoneInputProps) {
//   const [country, setCountry] = useState(countries[0]);
//   const [number, setNumber] = useState("");

//   function handleChange(val: string) {
//     setNumber(val);
//     onChange?.(`${country.dial}${val}`);
//   }

//   function handleCountryChange(code: string) {
//     const selected = countries.find((c) => c.code === code);
//     if (selected) {
//       setCountry(selected);
//       onChange?.(`${selected.dial}${number}`);
//     }
//   }

//   const isValid = number.length >= 7;

//   return (
//     <div className="space-y-1">
      
//       {/* Label row */}
//       <div className="flex items-center gap-2 text-xs text-muted-foreground">
//         <Phone className="h-3.5 w-3.5" />
//         Phone Number
//       </div>

//       {/* Input wrapper */}
//       <div className="flex items-center rounded-xl border bg-background px-3 py-2 focus-within:ring-2 focus-within:ring-primary/30 transition">
        
//         {/* Country picker */}
//         <select
//           value={country.code}
//           onChange={(e) => handleCountryChange(e.target.value)}
//           className="bg-transparent text-sm outline-none mr-2"
//         >
//           {countries.map((c) => (
//             <option key={c.code} value={c.code}>
//               {c.dial}
//             </option>
//           ))}
//         </select>

//         {/* Input */}
//         <Input
//           type="tel"
//           value={number}
//           onChange={(e) => handleChange(e.target.value)}
//           placeholder="801 234 5678"
//           className="border-0 shadow-none focus-visible:ring-0 px-0"
//         />
//       </div>

//       {/* Validation */}
//       {!isValid && number.length > 0 && (
//         <p className="text-xs text-red-500">
//           Enter a valid phone number
//         </p>
//       )}
//     </div>
//   );
// }