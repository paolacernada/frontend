import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseLogTable from "../components/CourseLogTable";
import { GiNotebook } from "react-icons/gi"

function CourseLogPage({ setCourse }) {
    
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    const retrieveCourses = async () => {
        const response = await fetch ("https://paolacernada-website.herokuapp.com");
        const courses = await response.json();
        setCourses(courses);
    }

    const editCourse = async course => {
        setCourse(course);
        navigate("/edit-course");

    }

    const deleteCourse = async id => {

        const response = await fetch("https://paolacernada-website.herokuapp.com", {
            method: "DELETE", 
            body: JSON.stringify({id:`${id}`}), 
            headers: {
                "Content-Type": "application/json",
            },
        });

        // const response = await fetch(`/courseRegistry/${id}`, { method: "DELETE"});

        if (response.status === 204) {
            const getResponse = await fetch("https://paolacernada-website.herokuapp.com");
            const courses = await getResponse.json();
            setCourses(courses);
        } else {
            console.error(`Failed to delete the row with id: ${id} (status code = 204)`)
        }
    }

    useEffect(() => {
        retrieveCourses();
    }, []);

    return (

        <>

            <h2>My College Courses <i><GiNotebook/></i></h2>

            <article>
                <p>
                    I created this page in order to keep track of all the programming courses I have already completed or those that are currently in progress. 
                </p>

                <CourseLogTable
                    courses={courses}
                    onDelete={deleteCourse}
                    onEdit={editCourse}
                />
            </article>

        </>
    );
}

export default CourseLogPage;