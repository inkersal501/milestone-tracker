import { Link } from "react-router-dom";

function MilestoneCard({ milestone }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-primary">{milestone.title}</h3>
        <span className="text-sm text-gray-500">
          {new Date(milestone.date).toLocaleDateString("en-In")}
        </span>
      </div>

      {milestone.notes && (
        <p className="text-sm text-gray-700 mb-3">
          {milestone.notes.length > 100
            ? milestone.notes.slice(0, 100) + "..."
            : milestone.notes}
        </p>
      )}

      <div className="text-right">
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
