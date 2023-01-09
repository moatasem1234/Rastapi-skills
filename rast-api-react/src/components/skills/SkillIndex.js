import { useEffect, useContext } from "react";
import SkillContext from "../../context/SkillContext";
import { Link } from "react-router-dom";

const SkillIndex = (props) => {
  const { skills, getSkills, setErrors,deleteSkillHandler } = useContext(SkillContext);
  useEffect(() => {
    getSkills();
    setErrors({})
  }, []);
  return (
    <div className="mt-12">
      <div className=" flex justify-end m-2 p-2">
        <Link
          to="/skills/create"
          className=" px-4 py-2 text-white bg-indigo-700 hover:bg-indigo-900 rounded-md "
        >
          New Skill
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-500">
                  <td className="px-6 py-4">{skill.name}</td>
                  <td className="px-6 py-4">{skill.slug}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/skills/${skill.id}/edit`}
                      className=" px-4 py-2 text-white bg-green-700 hover:bg-green-900 rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteSkillHandler(skill.id)}
                      className=" px-4 ml-2 py-2 text-white bg-red-700 hover:bg-red-900 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillIndex;
