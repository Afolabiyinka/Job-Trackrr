import InterviewRemindersCard from "../../dashboard/components/InterviewRemindersCard";

const Notifications = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Interviews</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Keep track of upcoming interview reminders.
        </p>
      </div>

      <InterviewRemindersCard />
    </div>
  );
};

export default Notifications;
