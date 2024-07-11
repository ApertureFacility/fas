import React from 'react';
import TireForm from '../createTire/TireForm';
import { ICreateTireData } from './TireForm';
import { createTire } from '../../dbRequests/tiresRequests';
import './CreateTire.css';
import AdminHeader from '../adminPage/adminHeader/adminHeader';
import AdminFooter from '../adminPage/adminFooter/adminFooter';
import { TireComponent } from '../tireDetailPage/tireDetailPage';

const CreateTire: React.FC = () => {
    const handleSubmit = async (formData: ICreateTireData) => {
        try {
            const newTire = await createTire(formData);
            if (typeof newTire === 'string') {
                console.log(newTire);
            } else {
                console.log('Tire created successfully:', newTire);
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div className=''>
            <AdminHeader />
            <TireForm onSubmit={handleSubmit} />
            <AdminFooter />
            <TireComponent id={16} />
        </div>
    );
};

export default CreateTire;
