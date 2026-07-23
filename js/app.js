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

        title: "JavaScript Mastery",

        description: "Learn JavaScript from Beginner to Advanced with Practical Examples.",

        lessons: [

            "Introduction to JavaScript",

            "Variables & Data Types",

            "Operators",

            "Conditional Statements",

            "Loops",

            "Functions",

            "DOM Manipulation",

            "Mini Projects"

        ]

    },

    github: {

        title: "🐙 Git & GitHub",

        description: "Learn Git & GitHub from Beginner to Advanced with Practical Examples.",

        lessons: [

            "Introduction to Git",

            "Installing Git",

            "Git Basics",

            "GitHub Repository",

            "Branching",

            "Clone & Pull",

            "Collaboration",

            "Mini Project"

        ]

    },

    python: {

        title: "🐍 Python Programming",

        description: "Master Python from beginner to advanced.",

        lessons: [
            "Introduction to Python",
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

    mysql: {

        title: "🗄️ MySQL",

        description: "Learn MySQL from basics to advanced.",

        lessons: [

            "Introduction to MySQL",
            "Database & Tables",
            "Create Database",
            "CRUD Operations",
            "SELECT Queries",
            "Joins",
            "Aggregate Functions",
            "Constraints & Keys",
            "Advanced SQL",
            "MYSQL Mini Project"

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
        if (localStorage.getItem("pythonIntroductionCompleted") === "true") completed++;
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
        if (localStorage.getItem("cssSelectorsCompleted") === "true") completed++;
        if (localStorage.getItem("cssColorsCompleted") === "true") completed++;
        if (localStorage.getItem("cssBoxModelCompleted") === "true") completed++;
        if (localStorage.getItem("cssFlexboxCompleted") === "true") completed++;
        if (localStorage.getItem("cssGridCompleted") === "true") completed++;
        if (localStorage.getItem("cssResponsiveCompleted") === "true") completed++;
        if (localStorage.getItem("cssProjectsCompleted") === "true") completed++;
    }

    else if (courseName === "javascript") {
        
        if (localStorage.getItem("jsIntroCompleted") === "true") completed++;
        if (localStorage.getItem("jsVariablesCompleted") === "true") completed++;
        if (localStorage.getItem("jsOperatorsCompleted") === "true") completed++;
        if (localStorage.getItem("jsConditionsCompleted") === "true") completed++;
        if (localStorage.getItem("jsLoopsCompleted") === "true") completed++;
        if (localStorage.getItem("jsFunctionsCompleted") === "true") completed++;
        if (localStorage.getItem("jsDOMCompleted") === "true") completed++;
    }

    else if (courseName === "github") {

        if (localStorage.getItem("gitIntroCompleted") === "true") completed++;
        if (localStorage.getItem("gitInstallCompleted") === "true") completed++;
        if (localStorage.getItem("gitBasicsCompleted") === "true") completed++;
        if (localStorage.getItem("gitRepoCompleted") === "true") completed++;
        if (localStorage.getItem("gitBranchCompleted") === "true") completed++;
        if (localStorage.getItem("gitCloneCompleted") === "true") completed++;
        if (localStorage.getItem("gitCollaborationCompleted") === "true") completed++;
        if (localStorage.getItem("gitProjectCompleted") === "true") completed++;

    }

    else if (courseName === "mysql") {

        if (localStorage.getItem("mysqlIntroCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlDatabaseCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlCreateCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlCRUDCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlSelectCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlJoinsCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlAggregateCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlConstraintsCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlAdvancedCompleted") === "true") completed++;
        if (localStorage.getItem("mysqlProjectCompleted") === "true") completed++;
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
            if (lesson === "Introduction to Python") {

                window.location.href = "pages/python/introduction.html";

            }
            else if (lesson === "Variables & Data Types") {

                window.location.href = "pages/python/variables.html";

            }
            else if (lesson === "Operators") {

                window.location.href = "pages/python/operators.html";

            }
            else if (lesson === "Conditional Statements") {
                window.location.href = "pages/python/conditions.html";
            }
            else if (lesson === "Loops") {
                window.location.href = "pages/python/loops.html";
            }
            else if (lesson === "Functions") {
                window.location.href = "pages/python/functions.html";
            }
            else if (lesson === "Object Oriented Programming") {
                window.location.href = "pages/python/oop.html";
            }
            else if (lesson === "File Handling") {
                window.location.href = "pages/python/filehandling.html";
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
            else if (lesson === "CSS Selectors") {
                window.location.href = "pages/css/selectors.html";
            }
            else if (lesson === "Colors & Backgrounds") {
                window.location.href = "pages/css/colors.html";
            }
            else if (lesson === "Box Model") {
                window.location.href = "pages/css/boxmodel.html";
            }
            else if (lesson === "Flexbox") {
                window.location.href = "pages/css/flexbox.html";
            }
            else if (lesson === "CSS Grid") {
                window.location.href = "pages/css/grid.html";
            }
            else if (lesson === "Responsive Design") {
                window.location.href = "pages/css/responsive.html";
            }
            else if (lesson === "CSS Projects") {
                window.location.href = "pages/css/projects.html";
            }
            // javascript
            else if (lesson === "Introduction to JavaScript") {
                window.location.href = "pages/javascript/introduction.html";
            }
            else if (lesson === "Variables & Data Types") {
                window.location.href = "pages/javascript/variables.html";
            }
            else if (lesson === "Operators") {
                window.location.href = "pages/javascript/operators.html";
            }
            else if (lesson === "Conditional Statements") {
                window.location.href = "pages/javascript/conditions.html";
            }
            else if (lesson === "Loops") {
                window.location.href = "pages/javascript/loops.html";
            }
            else if (lesson === "Functions") {
                window.location.href = "pages/javascript/functions.html";
            }
            else if (lesson === "DOM Manipulation") {
                window.location.href = "pages/javascript/dom.html";
            }
            else if (lesson === "Mini Projects") {
                window.location.href = "pages/javascript/mini-project.html";
            }

            // Git & GitHub

            else if (lesson === "Introduction to Git") {

                window.location.href = "pages/github/introduction.html";

            }

            else if (lesson === "Installing Git") {

                window.location.href = "pages/github/installation.html";

            }

            else if (lesson === "Git Basics") {

                window.location.href = "pages/github/git-basics.html";

            }

            else if (lesson === "GitHub Repository") {

                window.location.href = "pages/github/github-repository.html";

            }

            else if (lesson === "Branching") {

                window.location.href = "pages/github/branching.html";

            }

            else if (lesson === "Clone & Pull") {

                window.location.href = "pages/github/clone-pull.html";

            }

            else if (lesson === "Collaboration") {

                window.location.href = "pages/github/collaboration.html";

            }

            else if (lesson === "Mini Project") {

                window.location.href = "pages/github/mini-project.html";

            }

            // mysql
            // ===============================
            // MySQL Course
            // ===============================

            else if (lesson === "Introduction to MySQL") {

                window.location.href = "pages/mysql/introduction.html";

            }

            else if (lesson === "Database & Tables") {

                window.location.href = "pages/mysql/database-table.html";

            }

            else if (lesson === "Create Database & Table") {

                window.location.href = "pages/mysql/create-database.html";

            }

            else if (lesson === "CRUD Operations") {

                window.location.href = "pages/mysql/crud.html";

            }

            else if (lesson === "SELECT Queries") {

                window.location.href = "pages/mysql/select.html";

            }

            else if (lesson === "Joins") {

                window.location.href = "pages/mysql/joins.html";

            }

            else if (lesson === "Aggregate Functions") {

                window.location.href = "pages/mysql/aggregate.html";

            }

            else if (lesson === "Constraints & Keys") {

                window.location.href = "pages/mysql/constraints.html";

            }

            else if (lesson === "Advanced SQL") {

                window.location.href = "pages/mysql/advanced.html";

            }

            else if (lesson === "MYSQL Mini Project") {

                window.location.href = "pages/mysql/mysql-project.html";

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

loadCourse("html");

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