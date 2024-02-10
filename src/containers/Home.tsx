import React from 'react';
import {Quote} from "../types";
import Quotes from "../components/Quetes/Quotes";
import Category from "../components/Quetes/Category";

interface Props {
    quotes: Quote[];
}

const Home: React.FC<Props> = ({quotes}) => {
    return (
        <div className="row mx-auto">
            <div className="col-4">
                <Category/>
            </div>
            <div className="col-8 mt-5">
                <Quotes
                    quotes={quotes}
                />
            </div>
        </div>
    );
};

export default Home;