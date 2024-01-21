import ExpenseManagement from "./ExpenseManagement";
import TaskManagement from "./TaskManagement";


const Features = () => {


    return (
        <div className="bg-secondaryLight py-40 px-20">
            <div>
                <TaskManagement></TaskManagement>
            </div>
            <div className="mt-20">
                <ExpenseManagement></ExpenseManagement>
            </div>
        </div>
    );
};

export default Features;