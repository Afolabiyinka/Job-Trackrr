function getStatusColor(
  status: "applied" | "interview" | "offer" | "rejected",
) {
  switch (status) {
    case "applied":
      return "bg-blue-500 text-blue-100";
    case "interview":
      return "bg-yellow-500 text-yellow-100";
    case "offer":
      return "bg-green-600 text-green-100";
    case "rejected":
      return "bg-red-600 text-red-100";
    default:
      return "bg-gray-500 text-gray-100";
  }
}

export { getStatusColor };
