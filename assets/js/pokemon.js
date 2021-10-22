class Pokemon {
  constructor(name, abilities, height, baseExperience, sprites) {
    this._name = name
    this._height = height
    this._abilities = abilities
    this._baseExperience = baseExperience
    this._sprites = sprites
  }

  get name() {
    return this._capitalize(this._name)
  }

  get abilities() {
    return this._abilitiesFilter(this._abilities)
  }

  get height() {
    return `${this._height}m` 
  }

  get baseExperience() {
    return `${this._baseExperience}/100` 
  }

  get image() {
    return this._sprites.front_default
  }

  _capitalize(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
  } 

  _abilitiesFilter(abilities) {
    return abilities.map(item => ` ${this._capitalize(item.ability.name)}`)
  }
}