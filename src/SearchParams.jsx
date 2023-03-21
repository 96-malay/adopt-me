import { useState } from "react"
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    // Hooks
    const [location,setLocation] = useState("")
    const [animal,setAnimal] = useState("")
    const [breed,setBreed] = useState("")
    return (
        <div>
            <label htmlFor="location">
                location
                <input id="location"
                onChange={ (e) => setLocation(e.target.value)}
                value={location}
                placeholder="Location"
                />
            </label>
            <label htmlFor="animal">
                animal
                <select 
                    id="animal"
                    placeholder="Animal"
                    value={animal}
                    onChange={ (e) => {
                        setAnimal(e.target.value);
                        setBreed("")
                    }} />
            </label>
        </div>
    )
}