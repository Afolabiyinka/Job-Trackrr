function getStatusColor(
  status: "applied" | "interview" | "offer" | "rejected" | null,
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

function formatDate(date: Date | string | null) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
  return formattedDate;
}

function showInterviewIndicator(interviewDate: Date | string | null): {
  upcoming: boolean;
  message: string;
} {
  if (!interviewDate) {
    return { upcoming: false, message: "No interview scheduled" };
  }

  const currentDate = new Date();
  const interviewDateObj = new Date(interviewDate);

  const timeDifference = interviewDateObj.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  if (daysDifference > 7) {
    return {
      upcoming: true,
      message: "Interview scheduled in more than a week",
    };
  } else if (daysDifference > 0) {
    return { upcoming: true, message: `Interview in ${daysDifference} day(s)` };
  } else if (daysDifference === 0) {
    return { upcoming: true, message: "Interview is today!" };
  } else {
    return { upcoming: false, message: "Interview date has passed" };
  }
}

export { getStatusColor, formatDate, showInterviewIndicator };
