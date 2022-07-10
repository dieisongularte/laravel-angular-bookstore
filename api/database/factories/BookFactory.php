<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $arrCategory = ['Romance', 'Drama', 'Suspense', 'Ação'];
        return [
            'name'     => $this->faker->firstName(),
            'price'    => $this->faker->randomFloat(2),
            'quantity' => $this->faker->numberBetween(1, 150),
            'category' => $this->faker->randomElement($arrCategory),
            'img'      => 'icone-livro',
        ];
    }
}
