import React, { useState } from "react";
import { Link } from "react-router-dom";

const groups = [
    {
        name: "Tech Enthusiasts",
        description: "A group for discussing the latest in technology.",
        tags: ["Tech", "Innovation", "AI"],
        type: "Public",
        members: 120,
    },
    {
        name: "Fitness Freaks",
        description: "For those who love staying fit and healthy.",
        tags: ["Fitness", "Health", "Workout"],
        type: "Private",
        members: 80,
    },
    {
        name: "Book Lovers",
        description: "Join if you're passionate about reading books.",
        tags: ["Books", "Fiction", "Non-fiction"],
        type: "Public",
        members: 200,
    },
    {
        name: "Travel Junkies",
        description: "A group for wanderlusts who love to explore new places.",
        tags: ["Travel", "Adventure", "Photography"],
        type: "Public",
        members: 95,
    },
    {
        name: "Foodies United",
        description: "For people who enjoy cooking and tasting different cuisines.",
        tags: ["Food", "Recipes", "Cooking"],
        type: "Private",
        members: 150,
    },
    {
        name: "Movie Buffs",
        description: "Discuss and review the latest movies and series.",
        tags: ["Movies", "Cinema", "Cinema", "Cinema", "Reviews"],
        type: "Public",
        members: 300,
    },
    {
        name: "Gaming Guild",
        description: "A community for gamers to connect and compete.",
        tags: ["Games", "eSports", "Multiplayer"],
        type: "Private",
        members: 210,
    },
    {
        name: "Music Maniacs",
        description: "For people passionate about music and instruments.",
        tags: ["Music", "Instruments", "Concerts"],
        type: "Public",
        members: 180,
    },
    {
        name: "Eco Warriors",
        description: "Discuss environmental issues and sustainability initiatives.",
        tags: ["Environment", "Green", "Sustainability"],
        type: "Private",
        members: 60,
    },
    {
        name: "Artistic Souls",
        description: "A community for artists and art enthusiasts to share and learn.",
        tags: ["Art", "Creativity", "Painting"],
        type: "Public",
        members: 125,
    },
    {
        name: "Startup Circle",
        description: "Networking for entrepreneurs and aspiring business owners.",
        tags: ["Business", "Startup", "Entrepreneurship"],
        type: "Private",
        members: 70,
    },
    {
        name: "Mindfulness Masters",
        description: "Learn and share about mindfulness, meditation, and mental health.",
        tags: ["Mindfulness", "Meditation", "Mental Health"],
        type: "Public",
        members: 110,
    }
];

function Home() {
    const [searchParams, setSearchParams] = useState({
        groupName: "",
        groupType: "",
        groupTag: "",
    });
    const [filteredGroups, setFilteredGroups] = useState(groups);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [quickJoinLink, setQuickJoinLink] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        const { groupName, groupType, groupTag } = searchParams;

        const filtered = groups.filter((group) => {
            const matchesName = groupName === "" || group.name.toLowerCase().includes(groupName.toLowerCase());
            const matchesType = groupType === "" || group.type === groupType;
            const matchesTag = groupTag === "" || group.tags.some((tag) => tag.toLowerCase().includes(groupTag.toLowerCase()));

            return matchesName && matchesType && matchesTag;
        });

        setFilteredGroups(filtered);
    };

    const handleQuickJoin = () => {
        console.log("Joining group with link:", quickJoinLink);
        // Here you can implement logic to handle the link joining process
        setIsPopupOpen(false); // Close the popup after joining
    };

    return (
        <div className="app">
            <div className="search-form">
                <input
                    type="text"
                    name="groupName"
                    placeholder="Group Name"
                    value={searchParams.groupName}
                    onChange={handleInputChange}
                />
                <select
                    name="groupType"
                    value={searchParams.groupType}
                    onChange={handleInputChange}
                >
                    <option value="">Select Type</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>
                <input
                    type="text"
                    name="groupTag"
                    placeholder="Tag"
                    value={searchParams.groupTag}
                    onChange={handleInputChange}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <h1 className="app-title">Join Your Favorite Group</h1>
            <div className="group-container">
                {filteredGroups.length > 0 ? (
                    filteredGroups.map((group, index) => (
                        <div className="group-card" key={index}>
                            <h2 className="group-name">{group.name}</h2>
                            <p className="group-description">{group.description}</p>
                            <div className="group-tags">
                                {group.tags.map((tag, i) => (
                                    <span className="tag" key={i}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <p className="group-type">Type: {group.type}</p>
                            <p className="group-members">Members: {group.members}</p>
                            <Link to={`/chat/${group.name.replace(/\s+/g, '-').toLowerCase()}`} className="join-button">
                                Join
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No groups found matching the criteria.</p>
                )}
            </div>

            {/* + Button in the bottom-right corner */}
            <button className="add-group-button" onClick={() => setIsPopupOpen(true)}>
                +
            </button>

            {/* Popup Modal for Quick Join */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Quick Join</h2>
                        <input
                            type="text"
                            placeholder="Paste link here"
                            value={quickJoinLink}
                            onChange={(e) => setQuickJoinLink(e.target.value)}
                        />
                        <button className="join-button" onClick={handleQuickJoin}>
                            Join
                        </button>
                        <button className="close-button" onClick={() => setIsPopupOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;