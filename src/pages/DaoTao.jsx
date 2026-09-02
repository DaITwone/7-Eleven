import { useState } from 'react'
import CourseDetail from '../components/training/CourseDetail'
import CourseList from '../components/training/CourseList'
import { trainingCourses } from '../data/trainingCourses'
import { getQuizByCourseId } from '../data/trainingQuizzes'

export default function DaoTao() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showQuiz, setShowQuiz] = useState(false)

  const selectCourse = (course) => {
    setSelectedCourse(course)
    setShowQuiz(false)
  }

  const closeCourse = () => {
    setSelectedCourse(null)
    setShowQuiz(false)
  }

  if (selectedCourse) {
    const questions = getQuizByCourseId(selectedCourse.id)

    return (
      <CourseDetail
        course={selectedCourse}
        questions={questions}
        showQuiz={showQuiz}
        onStartQuiz={() => setShowQuiz(true)}
        onCloseQuiz={() => setShowQuiz(false)}
        onBack={closeCourse}
      />
    )
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-7">
        <p className="mb-1 text-sm font-bold text-brand-green">
          TRUNG TÂM ĐÀO TẠO
        </p>

        <h1 className="text-2xl text-brand-red font-extrabold tracking-tight md:text-3xl">
          LỘ TRÌNH ĐÀO TẠO NHÂN SỰ 7-ELEVEN
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Học quy trình nghiệp vụ và hoàn thành bài kiểm tra sau mỗi
          chuyên đề.
        </p>
      </div>

      <CourseList
        courses={trainingCourses}
        onSelectCourse={selectCourse}
      />
    </div>
  )
}