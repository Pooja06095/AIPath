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
            "Introduction to HTML",

            "HTML Tags",

            "HTML Forms",

            "HTML Tables",

            "Semantic HTML"
            

        ]

    },

    css: {
        title: "🎨 CSS Course",
        description: "Learn CSS from beginner to advanced and design beautiful websites.",
        lessons: [
            "Introduction to CSS",
            "CSS Selectors",
            "Colors & Backgrounds",
            "Box Model",
            "Flexbox",
            "Grid",
            "Responsive Design",
            "CSS Projects"
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
function updateCompletedCount(courseName) {

    let completed = 0;

    if (courseName === "python") {

        if (localStorage.getItem("variablesCompleted") === "true") completed++;
        if (localStorage.getItem("operatorsCompleted") === "true") completed++;
        if (localStorage.getItem("conditionsCompleted") === "true") completed++;
        if (localStorage.getItem("loopsCompleted") === "true") completed++;
        if (localStorage.getItem("functionsCompleted") === "true") completed++;
        if (localStorage.getItem("oopCompleted") === "true") completed++;
        if (localStorage.getItem("filehandlingCompleted") === "true") completed++;
        if (localStorage.getItem("pythonprojectsCompleted") === "true") completed++;
    }

    else if (courseName === "html") {

        if (localStorage.getItem("htmlIntroCompleted") === "true") completed++;
        if (localStorage.getItem("htmltagsCompleted") === "true") completed++;
        if (localStorage.getItem("htmlFormsCompleted") === "true") completed++;
        if (localStorage.getItem("htmlTablesCompleted") === "true") completed++;
        if (localStorage.getItem("semanticHtmlCompleted") === "true") completed++;

    }

    else if (courseName === "css") {

        if (localStorage.getItem("cssIntroCompleted") === "true") completed++;

    }

    document.getElementById("completed-count").innerText = completed;

}
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
            else if (lesson === "Loops") {
                window.location.href = "pages/loops.html";
            }
            else if (lesson === "Functions") {
                window.location.href = "pages/functions.html";
            }
            else if (lesson === "Object Oriented Programming") {
                window.location.href = "pages/oop.html";
            }
            else if (lesson === "File Handling") {
                window.location.href = "pages/filehandling.html";
            }
            // HTML Course
            else if (lesson === "Introduction to HTML") {
                window.location.href = "pages/html/introduction.html";
            }
            else if (lesson === "HTML Tags") {
                window.location.href = "pages/html/tags.html";
            }
            else if (lesson === "HTML Forms") {
                window.location.href = "pages/html/forms.html";
            }
            else if (lesson === "HTML Tables") {
                window.location.href = "pages/html/tables.html";
            }
            else if (lesson === "Semantic HTML") {
                window.location.href = "pages/html/semantic.html";
            }
            // CSS Course
            else if (lesson === "Introduction to CSS") {
                window.location.href = "pages/css/introduction.html";
            }

            else {

                alert("Coming Soon 🚀");

            }

        });

    });
    updateCompletedCount(courseName);

}




// ===============================
// Default Course
// ===============================

loadCourse("python");

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