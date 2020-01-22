import React from 'react';
import { Tabs, Panel } from '@bumaga/tabs';
import Navigation from "./Navigation/Navigation";

import './Main.scss';

/* Импорт табов */
import General from "../Tabs/General";
import Genre from "../Tabs/Genre";
import Info from "../Tabs/Info";
import Poster from "../Tabs/Poster";

/*
    Главная часть в модальном окне просмотра книги
*/

const Main = ({book}) => {
    return (
        <div className="main">
            <Tabs>
                <Navigation />
                <div className="modal-content">
                    <Panel>
                        <General title={book.title}
                                 author={book.author}
                                 publisher={book.publisher}
                                 paperback={book.paperback}
                                 isbn={book.isbn}
                                 summary={book.summary}

                        />
                    </Panel>
                    <Panel>
                        <Genre genre={book.genre} />
                    </Panel>
                    <Panel>
                        <Poster poster_image={book.poster_image}/>
                    </Panel>
                    <Panel>
                        <Info information={book.information}/>
                    </Panel>
                </div>
            </Tabs>
        </div>
    )
};

export default Main;
