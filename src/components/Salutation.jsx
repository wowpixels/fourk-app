function Salutation() {
  const randomSalutation = {
    0: `Hello! What are you <span class="text-orange-500">eating</span> today?`,
    1: `Howdy! What are you <span class="text-orange-500">cooking</span> today?`,
    2: `Hi! What are you <span class="text-orange-500">craving</span> today?`,
    3: `Salut! What are you <span class="text-orange-500">making</span> today?`,
    4: `Hallo! What are you <span class="text-orange-500">having</span> today?`,
    5: `Olá! What are you <span class="text-orange-500">preparing</span> today?`,
    6: `Hola! What are you <span class="text-orange-500">serving</span> today?`,
    7: `Ciao! What are you <span class="text-orange-500">whipping up</span> today?`,
    8: `Bonjour! What are you <span class="text-orange-500">dishing up</span> today?`,
    9: `Guten Tag! What are you <span class="text-orange-500">munching on</span> today?`,
  };

  return (
    <>
      <h2
        className="text-center mb-2 font-bold"
        dangerouslySetInnerHTML={{
          __html: randomSalutation[Math.floor(Math.random() * 10)],
        }}
      ></h2>
    </>
  );
}

export default Salutation;
