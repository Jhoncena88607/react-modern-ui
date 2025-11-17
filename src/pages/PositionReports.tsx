import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileSearch, Eye, Download, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type PositionReport = {
  id: string;
  title: string;
  reportingDate: string;
  creationDate: string;
  generatedBy: string;
};

export default function PositionReports() {
  const [reports, setReports] = useState<PositionReport[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reportTitle, setReportTitle] = useState("");
  const [reportDate, setReportDate] = useState("");

  const handleCreateReport = () => {
    if (!reportTitle || !reportDate) return;

    const newReport: PositionReport = {
      id: Date.now().toString(),
      title: reportTitle,
      reportingDate: new Date(reportDate).toLocaleString('en-GB', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      creationDate: new Date().toLocaleString('en-GB', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      generatedBy: "Current User",
    };

    setReports([...reports, newReport]);
    setReportTitle("");
    setReportDate("");
    setIsDialogOpen(false);
  };

  if (reports.length === 0) {
    return (
      <div className="p-4 md:p-6 lg:p-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <FileSearch className="w-12 h-12 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">You have not yet created any position reports.</h2>
            <p className="text-muted-foreground max-w-md">
              Click the button below and select a date to generate your first position report.
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                Create a position report
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create a position report</DialogTitle>
                <p className="text-sm text-muted-foreground">Choose a date and time</p>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Report title</Label>
                  <Input
                    id="title"
                    placeholder="Dividend distribution"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="datetime">Date and time</Label>
                  <Input
                    id="datetime"
                    type="datetime-local"
                    value={reportDate}
                    onChange={(e) => setReportDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateReport}>
                  Create
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Position reports</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create a position report
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create a position report</DialogTitle>
              <p className="text-sm text-muted-foreground">Choose a date and time</p>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Report title</Label>
                <Input
                  id="title"
                  placeholder="Dividend distribution"
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="datetime">Date and time</Label>
                <Input
                  id="datetime"
                  type="datetime-local"
                  value={reportDate}
                  onChange={(e) => setReportDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateReport}>
                Create
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[100px]">Actions</TableHead>
                <TableHead className="min-w-[200px]">Report Title</TableHead>
                <TableHead className="min-w-[150px]">Reporting Date</TableHead>
                <TableHead className="min-w-[150px]">Creation Date</TableHead>
                <TableHead className="min-w-[150px]">Generated By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{report.title}</TableCell>
                  <TableCell>{report.reportingDate}</TableCell>
                  <TableCell>{report.creationDate}</TableCell>
                  <TableCell>{report.generatedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          {reports.length} {reports.length === 1 ? 'item' : 'items'}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Items per page</span>
          <span className="font-medium">50</span>
        </div>
      </div>
    </div>
  );
}
