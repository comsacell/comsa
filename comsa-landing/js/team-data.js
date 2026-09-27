const TEAM_MEMBERS = [
    {
        id: "1",
        name: "Satyam Patil",
        role: "Chair",
        img: "assets/satyam.jpeg",
        bio: "Satyam Rahukumar Patil is a Third-Year B.Tech student in Electronics and Telecommunication Engineering and the President of COMSA. He is passionate about technology, leadership, and creating opportunities for students to learn, participate, and grow.",
        email: "satyampatil0015@gmail.com",
        linkedin: "https://www.linkedin.com/in/satyam-patil-5473b4331?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
        id: "2",
        name: "Prasad Chitnis",
        role: "Vice-chair",
        img: "assets/prasad.jpeg",
        bio: "I am Prasad Amit Chitnis a Third year driven by a passion for technology, community building, and hands-on innovation. Let's connect and build the future of electronics and telecommunications together",
        email: "connect.with.prasad.chitnis@gmail.com",
        linkedin: "https://www.linkedin.com/in/prasad-chitnis-2000b232a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
        id: "3",
        name: "Sahil Patil",
        role: "Secretary",
        img: "assets/sahil.jpeg",
        bio: "I’m Sahil Mangesh Patil an Electronics and Telecommunication Engineering student passionate about embedded systems, IoT, and innovative technology.Beyond technology, I actively contribute to leadership, event management, and student community initiatives.",
        email: "sahilpatil91562@gmail.com",
        linkedin: "https://www.linkedin.com/in/sahil-patil-145668315"
    },
    {
        id: "4",
        name: "Prajol Hundre",
        role: "Treasurer",
        img: "assets/prajol.jpeg",
        bio: "Managing funds and fueling innovation through strategic budgeting and financial planning. Dedicated to making our tech community's events bigger and better!",
        email: "prajolhundre4509@gmail.com",
        linkedin: "https://www.linkedin.com/in/prajol-hundre"
    },
    {
        id: "5",
        name: "Sakshi Natakle",
        role: "Web Master",
        img: "assets/sakshi.png",
        imgPos: "object-top",
        bio: "An enthusiastic Electronics & Telecommunication Engineering student with an interest in technology, creativity, and teamwork. Passionate about learning new skills and contributing to innovative club activities.",
        email: "sakshinatakle1612@gmail.com",
        linkedin: "https://www.linkedin.com/in/sakshi-natakle"
    },
    {
        id: "6",
        name: "Yadnesh Shivpuje",
        role: "Web Team",
        img: "assets/yadnesh.jpeg",
        bio: "I am Yadnesh, a TY ETC student I handle design, graphics, and online operations to make sure our event registrations and digital announcements run smoothly",
        email: "yadnesh.shivpuje45@gmail.com",
        linkedin: "https://www.linkedin.com/in/yadnesh-shivpuje-85967732a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
        id: "7",
        name: "Swaranjali Jadhav",
        role: "Web Team",
        img: "assets/swaranjali.jpeg",
        bio: "An E&TC Engineering student with a keen interest in technology, coding, and creative problem-solving. As a member of COMSA's Web Team, she contributes to the club's digital presence and web initiatives while exploring and learning through every project.",
        email: "swaranjalijadhav1086@gmail.com",
        linkedin: "https://www.linkedin.com/in/swaranjali-jadhav-b0204034b"
    },
    {
        id: "8",
        name: "Abhijeet Patil",
        role: "Social Media (Lead)",
        img: "assets/abhijeet.jpeg",
        bio: "Abhijeet Patil — Social Media Lead. As the Social Media Lead of COMSA Committee, I manage our digital presence and communication across social platforms. I focus on creating engaging content, promoting events, and showcasing the achievements and activities of our committee. My goal is to connect, inspire, and strengthen the COMSA community through impactful digital storytelling.",
        email: "abhijeet293904@gmail.com",
        linkedin: "https://www.linkedin.com/in/abhijeet-patil-5b142a32a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
        id: "9",
        name: "Durwank Mahajan",
        role: "Public Relation (Lead)",
        img: "assets/durwank.jpeg",
        bio: "The voice behind the club—driving engagement, managing outreach, and connecting our tech community. Stay tuned for our latest events and innovations!",
        email: "durwank.mm@gmail.com",
        linkedin: "https://www.linkedin.com/in/durwank-mahajan-1529b2286"
    },
    {
        id: "10",
        name: "Riya Kamble",
        role: "PR Team",
        img: "assets/riya.jpeg",
        imgPos: "object-top",
        bio: "Riya Sachin Kamble from ENTC, Part of the Public Relations Team at COMSA 2025-26. Enthusiastic about connecting people, collaborating and Opportunities.",
        email: "riyak17twice@gmail.com",
        linkedin: "https://www.linkedin.com/in/riya-kamble-948009357"
    },
    {
        id: "11",
        name: "Shreya Ranade",
        role: "PR Team",
        img: "assets/shreya.jpeg",
        bio: "Detailed biography goes here. This person is an integral part of the COMSA leadership team, driving initiatives and fostering a vibrant community for all members.",
        email: "shreyaaranade@gmail.com",
        linkedin: "#"
    },
    {
        id: "12",
        name: "Mrunal Patil",
        role: "Management (Lead)",
        img: "assets/mrunal.jpeg",
        bio: "I am B.Tech Electronics & Telecommunication Engineering student with an interest in technology, innovation, and practical projects. I enjoy learning new skills, working in teams, and contributing creative ideas.",
        email: "mrunaludaypatil@gmail.com",
        linkedin: "https://www.linkedin.com/in/mrunal-patil-745980345?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
        id: "13",
        name: "Sonali Patil",
        role: "Management Team",
        img: "assets/sonali.jpeg",
        bio: "Third-Year ENTC Engineering Student | COMSA Management Team Member | Passionate about teamwork, communication, event management & technology.",
        email: "sppatil0611@gmail.com",
        linkedin: "https://www.linkedin.com/in/sonali-patil-036571"
    },
    {
        id: "14",
        name: "Shubhada Bahirat",
        role: "Management Team",
        img: "assets/shubhada.png",
        bio: "Shubhada Amol Bahirat from ENTC, part of the Management Team at COMSA 2026–27. Passionate about teamwork, event coordination, and creating meaningful opportunities through collaboration and innovation.",
        email: "shubhadabahirat.07@gmail.com",
        linkedin: "https://www.linkedin.com/in/shubhada-bahirat-b85031339"
    },
];
