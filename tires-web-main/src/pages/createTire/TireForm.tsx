import React, { useState, ChangeEvent, FormEvent } from 'react';
import './CreateTire.css';


interface TireFormProps {
    onSubmit: (formData: ICreateTireData) => void;
}

export interface ICreateTireData {
    typeOfTire: string;
    icVc: string;
    diameter: number;
    width: number;
    profile: number;
    manufacturer: string;
    season: string;
    url: string;
    urls: string;
    inf: string;
    inArchive: boolean;
    price: number;
}


export const defaultTireData: ICreateTireData = {
    typeOfTire: '',
    icVc: 'ICVC007',
    diameter: 17,
    width: 225,
    profile: 45,
    manufacturer: 'Bridgestone',
    season: '',
    url: 'https://example.pagetire',
    urls: 'https://images.iconfigurators.app/images/tires/large/michelin-tires-defender-500.png',
    inf: 'someinfo',
    inArchive: false,
    price: 100,
};

const TireForm: React.FC<TireFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<ICreateTireData>(defaultTireData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.url) newErrors.url = 'URL is required';
        if (!formData.urls) newErrors.urls = 'Additional URLs are required';
        if (!formData.inf) newErrors.inf = 'Info is required';

        if (!formData.typeOfTire) newErrors.typeOfTire = 'Type of Tire is required';
        if (!formData.season) newErrors.season = 'Season is required';

        // Проверка поля icVc
        if (!/^[a-zA-Z0-9]{3,10}$/.test(formData.icVc)) {
            newErrors.icVc = 'IC/VC must be alphanumeric and between 3 and 10 characters';
        }

        // Проверка поля price
        if (formData.price <= 0) {
            newErrors.price = 'Price must be a positive value';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target;
        const { name, value, type } = target as HTMLInputElement;
        const checked = target.type === 'checkbox' ? (target as HTMLInputElement).checked : undefined;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : (type === 'number' ? parseFloat(value) : value),
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <div className="create-tire__container">
            <form className="tire-form" onSubmit={handleSubmit}>
                <div className="tire-form__section tire-form__section--left">
                    <img src={'/public/big-car-tire-summer.webp'} alt="Tire Image" className="tire-form__image" />
                </div>
                <div className="tire-form__section tire-form__section--middle">
                    <div className='tire-form--horizontal'>
                        <div className="form__label_horizontal">
                            <label className="tire-form__label">Width:</label>
                            {errors.width && <div className="error-message">{errors.width}</div>}
                            <input 
                                className={`tire-form__input ${errors.width ? 'error' : ''}`} 
                                type="number" 
                                name="width" 
                                value={formData.width} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form__label_horizontal">
                            <label className="tire-form__label">Profile:</label>
                            {errors.profile && <div className="error-message">{errors.profile}</div>}
                            <input 
                                className={`tire-form__input ${errors.profile ? 'error' : ''}`} 
                                type="number" 
                                name="profile" 
                                value={formData.profile} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form__label_horizontal">
                            <label className="tire-form__label">Diameter:</label>
                            {errors.diameter && <div className="error-message">{errors.diameter}</div>}
                            <input 
                                className={`tire-form__input ${errors.diameter ? 'error' : ''}`} 
                                type="number" 
                                name="diameter" 
                                min="0" 
                                max="100" 
                                value={formData.diameter} 
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">IC/VC:</label>
                        {errors.icVc && <div className="error-message">{errors.icVc}</div>}
                        <input 
                            className={`tire-form__input ${errors.icVc ? 'error' : ''}`} 
                            type="text" 
                            name="icVc" 
                            value={formData.icVc} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Price:</label>
                        {errors.price && <div className="error-message">{errors.price}</div>}
                        <input 
                            className={`tire-form__input ${errors.price ? 'error' : ''}`} 
                            type="number" 
                            name="price" 
                            value={formData.price} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">URL:<span className='require_dot'>*</span></label>
                        {errors.url && <div className="error-message">{errors.url}</div>}
                        <input 
                            className={`tire-form__input ${errors.url ? 'error' : ''}`} 
                            type="text" 
                            name="url" 
                            value={formData.url} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Additional URLs:<span className='require_dot'>*</span></label>
                        {errors.urls && <div className="error-message">{errors.urls}</div>}
                        <input 
                            className={`tire-form__input ${errors.urls ? 'error' : ''}`} 
                            type="text" 
                            name="urls" 
                            value={formData.urls} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="tire-form__section tire-form__section--right">
                    <div className="tire-form__group">
                        <label className="tire-form__label">Manufacturer:</label>
                        {errors.manufacturer && <div className="error-message">{errors.manufacturer}</div>}
                        <input 
                            className={`tire-form__input ${errors.manufacturer ? 'error' : ''}`} 
                            type="text" 
                            name="manufacturer" 
                            value={formData.manufacturer} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Type of Tire:<span className='require_dot'>*</span></label>
                        {errors.typeOfTire && <div className="error-message">{errors.typeOfTire}</div>}
                        <select 
                            className={`tire-form__input ${errors.typeOfTire ? 'error' : ''}`} 
                            name="typeOfTire" 
                            value={formData.typeOfTire} 
                            onChange={handleChange}
                        >
                            <option value="">Выбрать</option>
                            <option value="passenger">Osobowe/SUV</option>
                            <option value="truck">Dostawce</option>
                            <option value="4X4">Terenove/4X4</option>
                        </select>
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Season:<span className='require_dot'>*</span></label>
                        {errors.season && <div className="error-message">{errors.season}</div>}
                        <select 
                            className={`tire-form__input ${errors.season ? 'error' : ''}`} 
                            name="season" 
                            value={formData.season} 
                            onChange={handleChange}
                        >
                            <option value="">Выбрать</option>
                            <option value="summer">Letnie</option>
                            <option value="winter">Zimowe</option>
                            <option value="allseason">Caloroczne</option>
                        </select>
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Info:<span className='require_dot'>*</span></label>
                        {errors.inf && <div className="error-message">{errors.inf}</div>}
                        <input 
                            className={`tire-form__input ${errors.inf ? 'error' : ''}`} 
                            type="text" 
                            name="inf" 
                            value={formData.inf} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">In Archive:</label>
                        <input 
                            type="checkbox" 
                            name="inArchive" 
                            checked={formData.inArchive} 
                            onChange={handleChange} 
                        />
                    </div>
                    <button className="tire-form__button" type='submit'>Create Tire</button>
                </div>
            </form>
        </div>
    );
};

export default TireForm;
