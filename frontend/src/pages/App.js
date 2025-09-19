import { useState, useEffect } from 'react'
import { fetchAreaAutocomplete } from '../api/autocompleteAreaApi'
import { FormModel } from '../model/FormModel'

export default function App() {

    const [form, setForm] = useState(new FormModel({
        formId: Date.now(),
        title: '',
        type: '',
        area: null,
        price: '',
        extraDescription: ''
    }))
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

    // TODO: send to backend POST /api/property
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={e => handleChange('title', e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Type"
            value={form.type}
            onChange={e => handleChange('type', e.target.value)}
            required
        />
        <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={e => handleChange('price', e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Area"
            value={areaInput}
            onChange={e => {
                setAreaInput(e.target.value)
                handleChange('area', null)
            }}
            required
        />
        {suggestions.length > 0 && (
            <ul style={{ border: '1px solid #ccc', margin: 0, padding: '0 5px' }}>
            {suggestions.map(area => (
                <li
                key={area.id}
                onClick={() => {
                    handleChange('area', area)
                    setAreaInput(area.name)
                    setSuggestions([])
                }}
                style={{ cursor: 'pointer' }}
                >
                {area.name}
                </li>
            ))}
            </ul>
        )}
        <textarea
            placeholder="Extra Description"
            value={form.extraDescription}
            onChange={e => handleChange('extraDescription', e.target.value)}
            required
        />
        <button type="submit">Submit Ad</button>
    </form>
    )
}
