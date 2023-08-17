import React, {useState} from 'react';
import "./Search.css";

const SearchBox = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            onSearch(searchTerm);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleFormSubmit} className="search-box">
            <div className="search-input-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Поиск"
                    className="search_input"
                />
                <span className="search-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
<path
    d="M14.8677 2.2781e-05C9.824 2.2781e-05 5.7353 3.97622 5.7353 8.88106C5.7353 13.7859 9.824 17.7621 14.8676 17.7621C19.9113 17.7621 24 13.7859 24 8.88111C23.994 3.97856 19.9089 0.00583514 14.8682 0H14.8676L14.8677 2.2781e-05ZM14.8677 15.7064C10.9915 15.7064 7.84926 12.6506 7.84926 8.88106C7.84926 5.11154 10.9915 2.05584 14.8677 2.05584C18.7438 2.05584 21.886 5.11161 21.886 8.88113C21.8812 12.6487 18.7419 15.7017 14.8681 15.7064H14.8676L14.8677 15.7064ZM1.49674 23.3406L10.0657 15.0043L8.57117 13.5509L-0.000976562 21.8841L1.49674 23.3406Z"
    fill="#717171"/>
</svg>
</span>
            </div>
        </form>
    );
};

export default SearchBox;
