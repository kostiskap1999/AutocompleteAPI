    import { useState, useEffect } from 'react'
    import { fetchAreaAutocomplete } from '../api/autocompleteAreaApi'
    import { FormModel } from '../model/FormModel'
    import '../styles/Form.scss'
    import { AreaModel } from '../model/AreaModel'
    import { postAd } from '../api/adApi'

    export default function Form() {

        const [form, setForm] = useState(new FormModel())
        const [areaInput, setAreaInput] = useState('') // refers to whatever the user types in the Area field
        const [suggestions, setSuggestions] = useState([])
        const [showSuggestions, setShowSuggestions] = useState(false)
        const [cache, setCache] = useState({})

        /* handles Area suggestion list fetching with some prerequisites, so long as the input is
        more than 3 characters and is not cached. also handles caching, and has a timeout to avoid
        constant api calls.
        */
        useEffect(() => {
            const timeout = setTimeout(async () => {
            if (areaInput.length < 3) {
                setSuggestions([])
                return
            }

            if (cache[areaInput]) {
                setSuggestions(cache[areaInput])
                return
            }

            const results = await fetchAreaAutocomplete(areaInput)
            const suggestionList = results.map(result => new AreaModel(result))

            setCache(prev => ({ ...prev, [areaInput]: suggestionList }))

            setSuggestions(suggestionList)
            }, 500)

            return () => clearTimeout(timeout)
        }, [areaInput])


        const handleChange = (key, value) => {
            setForm(prev => ({ ...prev, [key]: value }))
        }

        const handleSubmit = async (e) => {
            console.log('1')
            e.preventDefault()
            console.log(form)

            try {
                console.log('1')
                await postAd(form)
                alert('Ad posted successfully.')
            } catch (err) {
                console.error(err)
                alert('Error posting ad: ' + err.message)
            }
        }

        return (
            <div className="app-container">
                <form className="ad-form" onSubmit={async (e) => await handleSubmit(e)}>
                    <div className="form-title">Post your ad</div>
                    {/* AD TITLE */}
                    <label>
                        <div className="label-text">
                            Title <span className="required-asterisk">*</span>
                        </div>
                        <input
                            type="text"
                            className="form-input"
                            value={form.title}
                            onChange={e => handleChange('title', e.target.value)}
                            required
                        />
                    </label>

                    {/* HOUSING TYPE */}
                    <label>
                    <div className="label-text">
                        Type <span className="required-asterisk">*</span>
                    </div>
                    <select
                        className="form-input"
                        value={form.type}
                        onChange={e => handleChange('type', e.target.value)}
                        required
                    >
                        <option value="">Select type</option>
                        <option value="Rent">Rent</option>
                        <option value="Buy">Buy</option>
                        <option value="Airbnb">Airbnb</option>
                    </select>
                    </label>

                    {/* PRICE */}
                    <label>
                        <div className="label-text">
                            Price <span className="required-asterisk">*</span>
                        </div>
                        <input
                            type="number"
                            className="form-input"
                            value={form.price}
                            onChange={e => handleChange('price', e.target.value)}
                            required
                        />
                    </label>

                    {/* AREA WITH AUTOCOMPLETE */}
                    <label>
                        <div className="label-text">
                            Area <span className="required-asterisk">*</span>
                        </div>
                        <div className="area-input-container">
                            <input
                                type="text"
                                className="form-input"
                                value={form.area ? `${form.area.mainText}, ${form.area.secondaryText}` : areaInput}
                                onChange={e => {
                                    setAreaInput(e.target.value)
                                    handleChange('area', null)
                                }}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => {
                                    setTimeout(() => setShowSuggestions(false), 150)
                                }}
                                required
                            />
                            {showSuggestions && suggestions.length > 0 && (
                                <ul className="suggestions-list">
                                {suggestions.map(area => (
                                    <li
                                        key={area.placeId}
                                        onClick={() => {
                                            handleChange('area', area)
                                            setAreaInput(area.mainText)
                                            setSuggestions([])
                                    }}
                                    >
                                        <div>{area.mainText}</div>
                                        <div>{area.secondaryText}</div>
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                    </label>


                    {/* ADDRESS */}
                    <label>
                        <div className="label-text">
                            Address <span className="required-asterisk">*</span>
                        </div>
                        <input
                            type="text"
                            className="form-input"
                            value={form.address}
                            onChange={e => handleChange('address', e.target.value)}
                            required
                        />
                    </label>


                    {/* PHONE */}
                    <label>
                        <div className="label-text">
                            Phone <span className="required-asterisk">*</span>
                        </div>
                        <input
                            type="text"
                            className="form-input"
                            value={form.phone}
                            onChange={e => handleChange('phone', e.target.value)}
                            required
                        />
                    </label>

                    {/* OPTIONAL EXTRA DESCRIPTION */}
                    <label>
                        <div className="label-text">
                            Extra Description
                        </div>
                        <textarea
                            className="form-textarea"
                            value={form.extraDescription}
                            onChange={e => handleChange('extraDescription', e.target.value)}
                        />
                    </label>

                    <button type="submit" className="submit-btn">Submit Ad</button>

                    <p className="required-text">* Required field</p>
                </form>
            </div>
        )
    }
