import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoalsStatsCard from "../components/GoalsStatsCard";
import ContactsStatsCard from "../components/ContactsStatsCard";
import TableView from "../../jobs/pages/views/table-view";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";

const DashBoard = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center">
      {/* <div className="w-full">
        <Card className="bg-primary text-white">
          <CardHeader>
            <CardTitle>All Jobs</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div> */}
      <section className="grid md:grid-cols-2 w-full gap-6 mb-4">
        <GoalsStatsCard />
        <ContactsStatsCard />
      </section>
      {/* table-view */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center w-full justify-between">
            <h1> My Jobs</h1>
            <Button size={`lg`} onClick={() => navigate("/jobs")}>
              <Briefcase /> View all jobs
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TableView />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashBoard;
