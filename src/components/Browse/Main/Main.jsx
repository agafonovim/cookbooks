import React, {useState} from 'react';
import './Main.scss';
import Filters from "../Filters/Filters";
import { Tabs, usePanelState } from '@bumaga/tabs';
import AllBooks from "../Tabs/AllBooks";
import MostRecent from "../Tabs/MostRecent";
import Search from "../Tabs/Search";
import FreeBooks from "../Tabs/FreeBooks";

const Panel = ({ component }) => {
    const isActive = usePanelState();
    return isActive ? component : null;
};

const Main = ({booksData}) => {
    const [searchValue, setSearchValue] = useState(0);

    return (
        <Tabs>
            <Filters setSearchValue={(e) => setSearchValue(e.target.value)} />
            <div className="books">
                <Panel component={<AllBooks booksData={booksData}/>} />
                <Panel component={<MostRecent booksData={booksData}/>} />
                <Panel component={<span>Тут ничего нет</span>}/>
                <Panel component={<FreeBooks booksData={booksData} />}/>
                <Panel component={<Search booksData={booksData} searchValue={searchValue} />} />
            </div>
        </Tabs>
    )
};

export default Main;
