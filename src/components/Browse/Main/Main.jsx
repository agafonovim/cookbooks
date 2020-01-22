import React, {useState} from 'react';
import Filters from "../Filters/Filters";
import { Tabs, usePanelState } from '@bumaga/tabs';
import AllBooks from "../Tabs/AllBooks";
import MostRecent from "../Tabs/MostRecent";
import Search from "../Tabs/Search";
import FreeBooks from "../Tabs/FreeBooks";
import MostPopular from "../Tabs/MostPopular";

import './Main.scss';

/*
    Для работы табов в Browse (фильтров)
*/

const Panel = ({ component }) => {
    const isActive = usePanelState();
    return isActive ? component : null;
};

/*
    Main в Browse
*/
const Main = ({booksData, ...props}) => {

    // Стейт для значения поиска
    const [searchValue, setSearchValue] = useState(0);

    return (
        <Tabs>
            <Filters setSearchValue={(e) => setSearchValue(e.target.value)} />
            <div className="books">
                <Panel component={<AllBooks booksData={booksData} {...props} />} />
                <Panel component={<MostRecent booksData={booksData} {...props} />} />
                <Panel component={<MostPopular booksData={booksData} {...props} />}/>
                <Panel component={<FreeBooks booksData={booksData} {...props} />}/>
                <Panel component={<Search booksData={booksData} searchValue={searchValue} {...props} />} />
            </div>
        </Tabs>
    );
};

export default Main;
