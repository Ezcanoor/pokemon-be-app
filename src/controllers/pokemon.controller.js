import isPrime from "../helper/prime_checker.helper.js";
import Pokemon from "../models/Pokemon.js";
import fibonacci from "../helper/fibonaci.helper.js"
import { Errors } from "../utils/errors.js";

class PokemonController {
  static async catchPokemon(req, res) {
    try {
      const {id} = req.params;
      const userId = req.userId
      const checkPoke = await Pokemon.findOne({
        where: {
          id
        }
      });
      if (!checkPoke)
        return res.status(404).json({ message: "Please input a valid poke" });
      if (checkPoke.status != 'free')
        return res.status(432).json({ message: "Unavail Poke" });
      
      const probable = Math.ceil(Math.random() * 100) 
      /**
       * since it has 50% chance, if the probable less than 50 "the hunt" will fail
       * and vice versa, if it shows more than 50, take care of your poke
       */
      if (probable >= 50) {
        await checkPoke.update({
          userId, 
          status: 'owned'
        });
        return res.status(200).json({
          probable,
          message: 'Congratulations !!! take care of your will, Pokemaster'
        })
      }
      return res.status(200).json({
        probable,
        message: 'Dont giving up !! try harder'
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  }

  static async releasePokemon(req,res) {
    try {
      const { id } = req.params;
      const userId = req.userId
      const randomize = Math.ceil(Math.random() * 1000)
      const checkPrime = isPrime(randomize)
      const poke = await Pokemon.findOne({
        where: {
          id
        }
      });

      if (poke.userId != userId )
          return res.status(432).json({messages: "Bro whos poke is that ?"});
      if (poke.status == 'free')
          return res.status(432).json({ messages: "Already free"})
      if (checkPrime) {
        await poke.update({
          userId : null,
          status: 'free'
        });

        return res.status(200).json({
          message: "GoodBye Master",
          randomize,
          checkPrime
        })
      }

      return res.status (200).json({
        message: "my lord just dont",
        randomize,
        checkPrime
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  }

  static async renamePokemon(req, res) {
    try {
      const { id } = req.params;
      const userId = req.userId
      const poke = await Pokemon.findOne({
        where: {
          id
        }
      });
      if (poke.userId != userId )
        return res.status(432).json({messages: "Bro whos poke is that ?"});

      const splitedName = poke.name.split('-')
      const newFib = fibonacci(poke.seq)
      await poke.update({
        name: `${splitedName[0]}-${newFib}`,
        seq: poke.seq + 1
      })
      return res.status(200).json({
        message: "Success Renamed Your Poke",
        name: poke.name
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
      
    }
  }
}

export default PokemonController