import { Router } from "express";
import PokemonController from "../controllers/pokemon.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const pokemonRoutes = Router();

pokemonRoutes.post('/pokemons/catchs/:id',authMiddleware, PokemonController.catchPokemon);
pokemonRoutes.post('/pokemons/releases/:id', authMiddleware, PokemonController.releasePokemon)
pokemonRoutes.post('/pokemons/rename/:id', authMiddleware, PokemonController.renamePokemon)

export {pokemonRoutes}