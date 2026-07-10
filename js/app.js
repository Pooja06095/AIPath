// ===============================
// Sidebar Menu
// ===============================

const menuItems = document.querySelectorAll(".menu-item");
const courseContent = document.getElementById("course-content");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        item.classList.add("active");

        loadCourse(item.dataset.course);

    });

});


// ===============================
// Course Data
// ===============================

const courses = {

    python: {

        title: "🐍 Python Programming",

        description: "Master Python from beginner to advanced.",

        lessons: [

            "Variables & Data Types",
            "Operators",
            "Conditional Statements",
            "Loops",
            "Functions",
            "Object Oriented Programming",
            "File Handling",
            "Projects"

        ]

    },

    html: {

        title: "🌐 HTML",

        description: "Learn the structure of web pages.",

        lessons: [

            "Introduction",
            "Tags",
            "Forms",
            "Tables",
            "Semantic HTML"

        ]

    },

    css: {

        title: "🎨 CSS",

        description: "Design beautiful responsive websites.",

        lessons: [

            "Selectors",
            "Flexbox",
            "Grid",
            "Animation",
            "Responsive Design"

        ]

    },

    javascript: {

        title: "💻 JavaScript",

        description: "Learn JavaScript to make websites interactive.",

        lessons: [

            "Variables",
            "Functions",
            "DOM",
            "Events",
            "ES6",
            "Mini Projects"

        ]

    },

    mysql: {

        title: "🗄️ MySQL",

        description: "Learn MySQL from basics to advanced.",

        lessons: [

            "Introduction",
            "DDL",
            "DML",
            "Joins",
            "Constraints",
            "Projects"

        ]

    },

    ml: {

        title: "🤖 Machine Learning",

        description: "Start your Machine Learning journey.",

        lessons: [

            "Introduction",
            "Linear Regression",
            "Classification",
            "Clustering",
            "Model Evaluation",
            "Projects"

        ]

    },

    genai: {

        title: "✨ Generative AI",

        description: "Learn Prompt Engineering and LLMs.",

        lessons: [

            "Introduction",
            "Prompt Engineering",
            "LLMs",
            "RAG",
            "AI Agents",
            "Projects"

        ]

    },

    projects: {

        title: "🚀 Projects",

        description: "Build real-world portfolio projects.",

        lessons: [

            "Portfolio Website",
            "Quiz App",
            "Student Result System",
            "AIPath",
            "AI Chatbot"

        ]

    },

    interview: {

        title: "🎤 Interview Questions",

        description: "Prepare for placements.",

        lessons: [

            "Python",
            "HTML/CSS",
            "JavaScript",
            "SQL",
            "Machine Learning",
            "HR Questions"

        ]

    }

};


// ===============================
// Load Course
// ===============================

function loadCourse(courseName) {

    const course = courses[courseName];

    if (!course) return;

    let lessonList = "";

    course.lessons.forEach((lesson, index) => {

        lessonList += `

        <div class="lesson-card">

            <span>Lesson ${index + 1}</span>

            <h3>${lesson}</h3>

            <button class="btn btn-primary lesson-btn"
                    data-lesson="${lesson}">
                Start Lesson
            </button>

        </div>

        `;

    });

    courseContent.innerHTML = `

        <h2>${course.title}</h2>

        <p>${course.description}</p>

        <div class="lesson-grid">

            ${lessonList}

        </div>


    `;
    document.querySelectorAll(".lesson-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            const lesson = btn.dataset.lesson;

            if (lesson === "Variables & Data Types") {

                window.location.href = "pages/variables.html";

            }
            else if (lesson === "Operators") {

                window.location.href = "pages/operators.html";

            }
            else if (lesson === "Conditional Statements") {
                window.location.href = "pages/conditions.html";
            }
            else {

                alert("Coming Soon 🚀");

            }

        });

    });


}




// ===============================
// Default Course
// ===============================

loadCourse("python");

// Completed Lessons Counter

let completed = 0;

if (localStorage.getItem("variablesCompleted") === "true") {
    completed++;
}
if (localStorage.getItem("operatorsCompleted") === "true") {
    completed++;
}
if (localStorage.getItem("conditionsCompleted") === "true") {
    completed++;
}

const completedCount = document.getElementById("completed-count");

if (completedCount) {
    completedCount.innerText = completed;
}

// ===============================
// Course Search
// ===============================

const searchInput = document.getElementById("search-course");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    menuItems.forEach(item => {

        const text = item.innerText.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});