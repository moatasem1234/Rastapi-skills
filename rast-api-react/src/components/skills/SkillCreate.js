import { useContext, useEffect } from "react";
import SkillContext from "../../context/SkillContext";
const SkillCreate = (props) => {
  const {
    formVlaues,
    initialform,
    setFormValue,
    onchangeHandler,
    setErrors,
    storeHandler,
    errors,
  } = useContext(SkillContext);

  useEffect(() => {
    setErrors({});
    setFormValue(initialform);
  }, []);
  return (
    <div className="mt-12">
      <form
        onSubmit={storeHandler}
        className=" max-w-md mx-auto bg-white shadow-md rounded-sm p-4"
      >
        <div className=" space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className=" block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              name="name"
              value={formVlaues["name"]}
              onChange={onchangeHandler}
              className=" border border-gray-500 text-gray-900 text-sm rounded-md w-full p-2"
            />
            {errors.name && (
              <span className=" text-sm text-red-600">{errors.name[0]}</span>
            )}
          </div>
        </div>
        <div className=" space-y-6">
          <div className="mb-4">
            <label htmlFor="slug" className=" block mb-2 text-sm font-medium">
              Slug
            </label>
            <input
              name="slug"
              value={formVlaues["slug"]}
              onChange={onchangeHandler}
              className=" border border-gray-500 text-gray-900 text-sm rounded-md w-full p-2"
            />
            {errors.slug && (
              <span className=" text-sm text-red-600">{errors.slug[0]}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <button className="px-4 py-2 text-white bg-indigo-700 hover:bg-indigo-900 rounded-md ">
            Store
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillCreate;
