import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <div >
            <section>
                MIT License &copy; QP, 2023
            </section>
        </div>
    ) ;
};

export default Footer;
