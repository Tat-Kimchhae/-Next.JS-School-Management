import Link from "next/link";
import Image from "next/image";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/assets/icons/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/teacher.png",
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/assets/icons/student.png",
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/assets/icons/parent.png",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/assets/icons/subject.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/assets/icons/class.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/assets/icons/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/assets/icons/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/result.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/calendar.png",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/assets/icons/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assets/icons/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    return (
        <div className='mt-4 text-sm'>
            {
                menuItems.map((menuItem) => (
                    <div className='flex flex-col gap-2' key={menuItem.title}>
                        <span className='hidden lg:block text-gray-400 font-light my-4'> {menuItem.title} </span>
                        {
                            menuItem.items.map((item) => (
                                <Link href={item.href} key={item.href} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
                                    <Image src={item.icon} alt='icon' width={20} height={20}/>
                                    <span className='hidden lg:block'> {item.label} </span>
                                </Link>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;