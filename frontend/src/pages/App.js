import { useState, useEffect } from 'react'
import { fetchAreaAutocomplete } from '../api/autocompleteAreaApi'
import { FormModel } from '../model/FormModel'
import '../styles/App.scss'

export default function App() {

    const [form, setForm] = useState(new FormModel())
    const [areaInput, setAreaInput] = useState('')
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
        const timeout = setTimeout(async () => {
        if (areaInput.length < 3) {
            setSuggestions([])
            return
        }

        const results = await fetchAreaAutocomplete(areaInput)
        setSuggestions(results)
        }, 300)

        return () => clearTimeout(timeout)
    }, [areaInput])


    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.area) {
            alert('Please select an area')
            return
        }

        console.log('Submitting ad:', form)
    }

    return (
        <div className="app-container">
            <form className="ad-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Title"
                    value={form.title}
                    onChange={e => handleChange('title', e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-input"
                    placeholder="Type"
                    value={form.type}
                    onChange={e => handleChange('type', e.target.value)}
                    required
                />
                <input
                    type="number"
                    className="form-input"
                    placeholder="Price"
                    value={form.price}
                    onChange={e => handleChange('price', e.target.value)}
                    required
                />
                <div className="area-input-container">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Area"
                        value={areaInput}
                        onChange={e => {
                            setAreaInput(e.target.value)
                            handleChange('area', null)
                        }}
                        required
                    />
                    {suggestions.length > 0 && (
                        <ul className="suggestions-list">
                        {suggestions.map(area => (
                            <li
                            key={area.id}
                            onClick={() => {
                                handleChange('area', area)
                                setAreaInput(area.name)
                                setSuggestions([])
                            }}
                            >
                            {area.name}
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
                <textarea
                    className="form-textarea"
                    placeholder="Extra Description"
                    value={form.extraDescription}
                    onChange={e => handleChange('extraDescription', e.target.value)}
                    required
                />
                <button type="submit" className="submit-btn">Submit Ad</button>
            </form>
        </div>
    )
}
