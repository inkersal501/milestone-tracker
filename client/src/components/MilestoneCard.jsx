import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MilestoneCard({ milestone }) {
  const [isDue, setIsDue] = useState(false);

  const isFiveDaysLeft = (date) => {
    const today = new Date();
    const dueDate = new Date(date);
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const diffInMs = dueDate - today;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays <= 5;
  };

  useEffect(() => {
    setIsDue(isFiveDaysLeft(milestone.date));
  }, [milestone.date]);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold text-primary">{milestone.title}</h4>
        <span className={`text-sm ${isDue ? 'text-red-500 font-semibold' : 'text-gray-500'}`}>
          {new Date(milestone.date).toLocaleDateString("en-IN")}
        </span>
      </div>

      {milestone.notes && (
        <p className="text-sm text-gray-700 mb-3">
          {milestone.notes.length > 100
            ? milestone.notes.slice(0, 100) + "..."
            : milestone.notes}
        </p>
      )}

      <div className="flex justify-end gap-4">
        <Link to={`/milestone/${milestone._id}/tips/new`} className="text-sm text-blue-600 hover:underline">Add Tips</Link>
        <Link
          to={`/milestone/${milestone._id}/tips`}
          className="text-sm text-blue-600 hover:underline"
        >
          View Tips
        </Link>
      </div>
    </div>
  );
}

export default MilestoneCard;
