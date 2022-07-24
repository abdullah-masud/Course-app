import React from 'react';
import coursesData from '../utils/CoursesData'
import Course from './Course';

const Courses = () => {


    return (
        <div className='lg:px-32 px-4 '>
            {
                coursesData.map(course => <Course
                    key={course.id}
                    course={course}
                />)
            }

        </div>

    );
};

export default Courses;
export async function getStaticProps(context) {

}

