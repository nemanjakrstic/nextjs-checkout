import { useState } from 'react';
import { useQuery } from 'react-query';
import Xola from '../../services/Xola';

const Button = ({ id, initialData }) => {
    const [showText, setShowText] = useState(false);
    console.log('Hello from client', id);

    const { data: button, isLoading } = useQuery('buttons', () => Xola.getButton(id), { initialData });

    if (isLoading) {
        return 'Loading...';
    }

    return (
        <div className="card-group">
            {button.items.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <img
                            src={'https://sandbox.xola.com' + item.product.photo.src}
                            className="card-img-top"
                            alt="..."
                        />

                        <div className="card-body">
                            <h5 className="card-title">{item.product.name}</h5>
                            <p className="card-text">{item.product.desc}</p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const getServerSideProps = async (context) => {
    return {
        props: {
            id: context.params.id,
            initialData: await Xola.getButton(context.params.id),
        },
    };
};

export default Button;
