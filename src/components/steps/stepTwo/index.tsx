import React, { useState } from 'react'

import RadioGroup from '../../forms/radiopGroup'

export default function StepTwo() {
  const [selected, setSelected] = useState<string>('Все модели')
  const buttons= ['Все модели', 'Эконом', 'Премиум']

  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <section>
      <RadioGroup
        buttons={buttons}
        selected={selected}
        handleChange={handleChange}
      />
    </section>
  )
}
