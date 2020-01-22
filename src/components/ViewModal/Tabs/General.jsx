import React from 'react';
import Text from "../Main/Text/Text";

/*
    Таб General
*/

const General = ({title, author, publisher, paperback, isbn, summary}) => (
    <>
        <Text title="Title" text={title} />
        <Text title="Author" text={author} />
        <Text title="Publisher" text={publisher} />
        <div className="group">
            <Text title="Paperback" text={paperback} />
            <Text title="ISBN" text={isbn} />
        </div>
        <Text title="Summary" text={summary} />
    </>
);

export default General;
