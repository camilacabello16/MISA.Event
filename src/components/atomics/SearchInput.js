import React, { useEffect, useState } from 'react';
import '../../assets/styles/atomics/SearchInput.css';

function SearchInput() {
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        localStorage.setItem('searchText', JSON.stringify(searchText));
    })

    function onChange(e) {
        setSearchText(e.target.value);
    }

    return (
        <div className="wp-search">
            <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16.016" height="16.016" viewBox="0 0 16.016 16.016">
                    <path id="Path_17" data-name="Path 17" d="M15.875.656a.321.321,0,0,1,0,.531l-.687.688a.321.321,0,0,1-.531,0L10.875-1.906a.36.36,0,0,1-.125-.25v-.437A6.307,6.307,0,0,1,6.5-1,6.261,6.261,0,0,1,1.906-2.906,6.261,6.261,0,0,1,0-7.5a6.261,6.261,0,0,1,1.906-4.594A6.261,6.261,0,0,1,6.5-14a6.261,6.261,0,0,1,4.594,1.906A6.261,6.261,0,0,1,13-7.5a6.307,6.307,0,0,1-1.594,4.25h.438a.3.3,0,0,1,.25.125ZM2.969-3.969A4.815,4.815,0,0,0,6.5-2.5a4.815,4.815,0,0,0,3.531-1.469A4.815,4.815,0,0,0,11.5-7.5a4.815,4.815,0,0,0-1.469-3.531A4.815,4.815,0,0,0,6.5-12.5a4.815,4.815,0,0,0-3.531,1.469A4.815,4.815,0,0,0,1.5-7.5,4.815,4.815,0,0,0,2.969-3.969Z" transform="translate(0 14)" fill="#999dab" />
                </svg>
            </div>
            <input type="text" placeholder="Tìm kiếm" onChange={onChange} />
        </div>
    );
}

export default SearchInput;