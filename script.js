let profileIndex = 0;

const speakerProfiles = [
    {
        name: "Brittni Lando",
        role: "Chief Marketing Officer",
        organization: "Acme Corp",
        bio: "Excels in empowering visionary companies through storytelling and strategic go-to-market planning. With extensive experience in product marketing and customer experience management, she is an accomplished author, podcast host, and mentor, sharing her expertise across diverse platforms and audiences.",
        imageSrc: "images/image1.jpeg"
    },
    {
        name: "Bobby Goins",
        role: "Chief Engagement Officer",
        organization: "Acquia",
        bio: "Excels in empowering visionary companies through storytelling and strategic go-to-market planning. With extensive experience in product marketing and customer experience management, he is an accomplished author, podcast host, and mentor, sharing his expertise across diverse platforms and audiences.",
        imageSrc: "images/image2.jpeg"
    },
    {
        name: "Juliette Ofeliyo",
        role: "Chief Technical Developer",
        organization: "Pantheon",
        bio: "Excels in empowering visionary companies through storytelling and strategic go-to-market planning. With extensive experience in product marketing and customer experience management, she is an accomplished author, podcast host, and mentor, sharing her expertise across diverse platforms and audiences.",
        imageSrc: "images/image3.jpeg"
    },
    {
        name: "Jones Jacob",
        role: "Chief Marketing Officer",
        organization: "Specbee",
        bio: "Excels in empowering visionary companies through storytelling and strategic go-to-market planning. With extensive experience in product marketing and customer experience management, he is an accomplished author, podcast host, and mentor, sharing his expertise across diverse platforms and audiences.",
        imageSrc: "images/image4.jpeg"
    }
];

function moveLeft() {
    const carouselContent = document.querySelector('.event-speakers__carousel-content');
    profileIndex = Math.max(profileIndex - 1, 0);
    carouselContent.style.transform = `translateX(-${profileIndex * 200}px)`;
}

function moveRight() {
    const carouselContent = document.querySelector('.event-speakers__carousel-content');
    profileIndex = Math.min(profileIndex + 1, speakerProfiles.length - 1);
    carouselContent.style.transform = `translateX(-${profileIndex * 200}px)`;
}

function displayInfo(index) {
    // Populate the speaker info section
    document.getElementById("info-name").textContent = speakerProfiles[index].name;
    document.getElementById("info-role").textContent = speakerProfiles[index].role;
    document.getElementById("info-organization").textContent = speakerProfiles[index].organization;
    document.getElementById("info-bio").textContent = speakerProfiles[index].bio;

    // Set the speaker image
    document.getElementById("info-image").src = speakerProfiles[index].imageSrc;

    // Show the info section
    const infoSection = document.getElementById("speaker-info");
    infoSection.style.display = "block";
}

function hideInfo() {
    // Hide the info section
    const infoSection = document.getElementById("speaker-info");
    infoSection.style.display = 'none';
}
