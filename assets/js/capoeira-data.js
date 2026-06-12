// Capoeira techniques data
// To add media: { type: 'gif'|'image'|'youtube'|'video', src: 'url' }
//               for youtube: { type: 'youtube', id: 'VIDEO_ID', start: 0 }

const techniques = [
  // Movement
  { id:'ginga',          name:'Ginga',               cat:'Movement',        desc:'The fundamental footwork of capoeira — a constant triangular swaying motion that keeps the practitioner in perpetual fluid movement, hiding intention and creating openings.' },
  { id:'balanco',        name:'Balanço',             cat:'Movement',        desc:'Side-to-side feinting motion used to deceive the opponent about the direction of attack or evasion.' },
  { id:'role',           name:'Rolê',                cat:'Movement',        desc:'A rolling motion staying low to the ground, used to move fluidly around the opponent.' },
  { id:'negativa',       name:'Negativa',            cat:'Movement',        desc:'Evasion technique by dropping to the ground on one side, keeping the body low and protected.',  media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/2/2b/Negativa_da_regional2.jpg' } },
  { id:'troca-de-pe',    name:'Troca de Pé',         cat:'Movement',        desc:'Change of Foot — a transition from the negativa position to reset stance.' },
  { id:'ponte',          name:'Ponte',               cat:'Movement',        desc:'Bridge position with the stomach facing upward; used as a base for acrobatics and evasions.' },

  // Evasions
  { id:'cocorinha',      name:'Cocorinha',           cat:'Evasions',        desc:'A simple squat with knees drawn to the chest, ducking under high kicks or attacks.' },
  { id:'esquiva',        name:'Esquiva',             cat:'Evasions',        desc:'Generic dodge — moving the head and torso to avoid horizontal blows.' },
  { id:'esquiva-baixa',  name:'Esquiva Baixa',       cat:'Evasions',        desc:'Extremely low dodge, nearly touching the ground to evade high and mid-level attacks.' },
  { id:'esquiva-lat',    name:'Esquiva Lateral',     cat:'Evasions',        desc:'Side dodge with feet parallel — stepping to the side to let an attack pass.' },
  { id:'esquiva-diag',   name:'Esquiva Diagonal',    cat:'Evasions',        desc:'Diagonal dodge advancing forward and to the side, closing distance while evading.' },
  { id:'paralelo',       name:'Paralelo',            cat:'Evasions',        desc:'A low squat resembling a horse stance from East Asian martial arts.',                           media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/8/85/Parlelo.JPG' } },

  // Falls
  { id:'queda-rins',     name:'Queda de Rins',       cat:'Falls',           desc:'A fall onto the kidneys (side of the torso) used both as an evasion and a launching point for kicks.' },
  { id:'queda-quatro',   name:'Queda de Quatro',     cat:'Falls',           desc:'Falling backwards into a crab-walk position — all four limbs on the ground.',               media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/6/68/CapoeiraMeialuaDeCompasso%26QuedaDeQuatro_ST_05.jpg' } },
  { id:'queda-tres',     name:'Queda de Três',       cat:'Falls',           desc:'Falling back onto both wrists and one leg, keeping the body low and mobile.' },

  // Cartwheels
  { id:'au-aberto',      name:'Aú Aberto',           cat:'Cartwheels',      desc:'Open cartwheel performed slowly with arms and legs bent to keep a low target profile.',      media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/c/c5/A%C3%BA.gif' } },
  { id:'au-fechado',     name:'Aú Fechado',          cat:'Cartwheels',      desc:'Closed cartwheel — the body remains tight and maximally protected throughout the movement.',   media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/b/b7/A%C3%BAzinho.gif' } },
  { id:'au-frente',      name:'Aú de Frente',        cat:'Cartwheels',      desc:'Front walkover cartwheel variant that ends in a front walkover.' },
  { id:'au-sem-mao',     name:'Aú Sem Mão',          cat:'Cartwheels',      desc:'Aerial cartwheel performed without hands touching the ground.',                               media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Au_Sem_Mao.gif' } },
  { id:'au-giro',        name:'Aú Giro Sem Mão',     cat:'Cartwheels',      desc:'Combines the aerial (no-hands) and front walkover cartwheel with added rotation.' },
  { id:'au-batido',      name:'Aú Batido',           cat:'Cartwheels',      desc:'Cartwheel with a downward hammer kick added at the top of the movement.' },
  { id:'au-batendo',     name:'Aú Batendo',          cat:'Cartwheels',      desc:'Kicking cartwheel with hands on the ground — striking outward during the movement.' },
  { id:'au-helicoptero', name:'Aú Helicóptero',      cat:'Cartwheels',      desc:'Cartwheel with a circular leg sweeping movement resembling helicopter blades.',             media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/6/62/Helicoptero_kick.gif' } },

  // Push Kicks
  { id:'bencao',         name:'Bênção',              cat:'Push Kicks',      desc:'Straight forward frontal push kick — also called Chapa de Frente. Drives the heel or sole into the opponent.', media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/3/30/Capoeira_Conviver_II_%281392841297%29.jpg' } },
  { id:'chapa-costas',   name:'Chapa de Costas',     cat:'Push Kicks',      desc:'Back push kick resembling a mule kick, delivered with the heel going backward.' },
  { id:'pisao',          name:'Pisão',               cat:'Push Kicks',      desc:'Side kick targeting the body — also called Chapa Lateral.' },
  { id:'chapa-baixa',    name:'Chapa Baixa',         cat:'Push Kicks',      desc:'Side kick to lower areas of the body, targeting knees or ankles.' },
  { id:'chapa-giratoria',name:'Chapa Giratória',     cat:'Push Kicks',      desc:'Rotating sole kick — the body spins before delivering the chapa.',                           media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/5/59/Chapa_Giratoria.gif' } },
  { id:'voo-morcego',    name:'Voo do Morcego',      cat:'Push Kicks',      desc:"Flying kick done sideways with both legs simultaneously — the \"bat's flight.\"" },

  // Crescent Kicks
  { id:'meia-lua-frente',name:'Meia-Lua de Frente',  cat:'Crescent Kicks',  desc:'Outside crescent kick sweeping across the face from outside to inside.' },
  { id:'armada',         name:'Armada',              cat:'Crescent Kicks',  desc:'Spinning back crescent kick — the body rotates fully before the kick lands. Also called Meia-Lua de Costas.' },
  { id:'armada-pulada',  name:'Armada Pulada',       cat:'Crescent Kicks',  desc:'Armada performed after a jump, adding height and power to the spinning crescent kick.' },
  { id:'armada-dupla',   name:'Armada Dupla',        cat:'Crescent Kicks',  desc:'Spinning kick executed with both legs together, traveling along the arc of an armada.' },
  { id:'armada-martelo', name:'Armada com Martelo',  cat:'Crescent Kicks',  desc:'Combination spinning kick: begins as an armada, ends as a roundhouse (martelo).' },
  { id:'queixada',       name:'Queixada',            cat:'Crescent Kicks',  desc:"Circular kick aimed at the opponent's jaw or cheek — often used to counter an esquiva." },

  // Compass Crescent Kicks
  { id:'rabo-arraia',    name:'Meia-Lua de Compasso',cat:'Compass Kicks',   desc:"Also called Rabo de Arraia (stingray's tail) — the \"king of kicks.\" A spinning low crescent kick with one hand on the ground for balance.", media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/a/a5/Ideal_Capoeira_Workshop_2019.jpg' } },
  { id:'mlc-dupla',      name:'Meia-Lua de Compasso Dupla', cat:'Compass Kicks', desc:'Compass crescent kick with no ground contact — both legs leave the floor.',         media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/0/0d/Meia_Lua_de_Compasso_Dupla.gif' } },
  { id:'meia-lua-solta', name:'Meia-Lua Solta',      cat:'Compass Kicks',   desc:'Compass crescent using only the pivoting leg; the body stays more upright.' },
  { id:'mlc-reversao',   name:'Meia-Lua Reversão',   cat:'Compass Kicks',   desc:'Begins as a compass crescent kick, ends in a front walkover.',                             media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Meia_Lua_Reversao.gif' } },
  { id:'mlc-rins',       name:'Meia-Lua + Queda de Rins', cat:'Compass Kicks', desc:'Combination of the compass crescent kick and the kidney fall.' },

  // Roundhouse Kicks
  { id:'martelo-pe',     name:'Martelo em Pé',       cat:'Roundhouse Kicks',desc:'Standing roundhouse kick — the most common martelo seen in Capoeira Regional rodas.',     media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/e/e0/CapoeiraMartelo_ST_05.jpg' } },
  { id:'martelo-chao',   name:'Martelo do Chão',     cat:'Roundhouse Kicks',desc:'Roundhouse kick delivered from the negativa (low ground) position.',                      media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/1/1f/Martelo_do_Chao.gif' } },
  { id:'martelo-rodado', name:'Martelo Rodado',      cat:'Roundhouse Kicks',desc:'Spinning martelo, similar to a 540 kick — the body rotates before the kick connects.' },

  // Snap Kicks
  { id:'ponteira',       name:'Ponteira',            cat:'Snap Kicks',      desc:'Front snap kick delivered with the ball of the foot, often used to test distance.' },

  // Hook Kicks
  { id:'gancho',         name:'Gancho',              cat:'Hook Kicks',      desc:'Deceptive attack that starts like a roundhouse but hooks inward at the end.' },
  { id:'gancho-girat',   name:'Gancho Giratório',    cat:'Hook Kicks',      desc:'Spinning version of the gancho, adding rotation for power and surprise.' },

  // Other Kicks
  { id:'escorpiao',      name:'Escorpião',           cat:'Other Kicks',     desc:'Backward kick over the head striking a target in front — the "scorpion kick."' },
  { id:'raiz',           name:'Raiz',                cat:'Other Kicks',     desc:'A sideswipe kick landing on the rear leg; combines power and positional change.' },

  // Head Butts
  { id:'cabecada',       name:'Cabeçada',            cat:'Head Butts',      desc:'Headbutt — pushing or striking the opponent with the head or forehead at close range.' },
  { id:'arpao-cabeca',   name:'Arpão de Cabeça',     cat:'Head Butts',      desc:'Full-body headbutt throw — driving the head into the opponent to destabilize them.' },
  { id:'escorumelo',     name:'Escorumelo',          cat:'Head Butts',      desc:"Upward headbutt targeting the opponent's chin from below." },

  // Hand Strikes
  { id:'asfixiante',     name:'Asfixiante',          cat:'Hand Strikes',    desc:'Straight punch with either hand — one of the few direct punches in capoeira.' },
  { id:'cutelo',         name:'Cutelo',              cat:'Hand Strikes',    desc:'Knifehand strike like a karate chop, targeting the neck or collarbone.' },
  { id:'cotovelada',     name:'Cotovelada',          cat:'Hand Strikes',    desc:'Elbow strike delivered from outside to inside at close range.' },
  { id:'dedeira',        name:'Dedeira',             cat:'Hand Strikes',    desc:'Eye poke with the index and middle fingers — a close-range targeting strike.' },
  { id:'galopante',      name:'Galopante',           cat:'Hand Strikes',    desc:'Open-hand slap to the face or ear.' },
  { id:'godeme',         name:'Godeme',              cat:'Hand Strikes',    desc:'Backhand strike to the face.' },
  { id:'telefone',       name:'Telefone',            cat:'Hand Strikes',    desc:'Simultaneous dual ear slaps — very painful and disorienting, compressing the eardrums.' },

  // Takedowns
  { id:'acoite-braco',   name:'Açoite de Braço',     cat:'Takedowns',       desc:'Shoulder throw from behind — using the arm to pull and rotate the opponent.' },
  { id:'arrastad',       name:'Arrastão',            cat:'Takedowns',       desc:'Classic double-leg takedown — grabbing both legs to sweep the opponent.' },
  { id:'balao-lado',     name:'Balão de Lado',       cat:'Takedowns',       desc:'Head-wrap takedown with body rotation — wrapping the arm around the head and rotating.',   media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/7/74/Balao_de_lado.jpg' } },
  { id:'banda',          name:'Banda',               cat:'Takedowns',       desc:"Sweep kick using the heel to knock out the opponent's supporting leg." },
  { id:'banda-costas',   name:'Banda de Costas',     cat:'Takedowns',       desc:"Counter-sweep against circular kicks — sweeping the opponent's leg from behind.",         media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/e/e3/Banda_de_Costa.gif' } },
  { id:'banda-dentro',   name:'Banda de Dentro',     cat:'Takedowns',       desc:'Inside sweep targeting the supporting leg from the inside.' },
  { id:'banda-tracada',  name:'Banda Traçada',       cat:'Takedowns',       desc:'Basic foot sweep during movement — a foundational sweep in the jogo.' },
  { id:'boca-calca',     name:'Boca de Calça',       cat:'Takedowns',       desc:"Takedown by grabbing the opponent's pant legs or ankles." },
  { id:'boca-calca-cos', name:'Boca de Calça de Costas', cat:'Takedowns',   desc:'Backward ankle pull from under a kick — catching the foot and pulling back.' },
  { id:'corta-capim',    name:'Corta-Capim',         cat:'Takedowns',       desc:'Sweep beneath a kick at ankle or instep — "grass cutter."',                               media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/7/76/Corta_Capim.gif' } },
  { id:'cruz',           name:'Cruz',                cat:'Takedowns',       desc:'Ducking under a kick and trapping the leg against the shoulders to destabilize.' },
  { id:'negativa-derrub',name:'Negativa Derrubando', cat:'Takedowns',       desc:'Foot hook executed from the negativa position, sweeping from the ground.' },
  { id:'paulista',       name:'Paulista',            cat:'Takedowns',       desc:'Sweep using the instep of the inside leg.' },
  { id:'rasteira',       name:'Rasteira',            cat:'Takedowns',       desc:"Iconic capoeira sweep — pulling or sweeping the opponent's leg in response to a kick.",    media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/d/de/Rasteira_no_chao.jpg' } },
  { id:'rasteira-chao',  name:'Rasteira do Chão',    cat:'Takedowns',       desc:'Extended hook leg sweep from a low (negativa) position.' },
  { id:'rasteira-pe',    name:'Rasteira em Pé',      cat:'Takedowns',       desc:'Standing quick sweep, suitable for countering direct attacks.',                            media:{ type:'image', src:'https://upload.wikimedia.org/wikipedia/commons/b/be/Rasteira_em_pe.jpg' } },
  { id:'rasteira-mao',   name:'Rasteira de Mão',     cat:'Takedowns',       desc:'Hand-based leg sweep — using the hands instead of the foot to catch and sweep.' },
  { id:'rasteira-cos',   name:'Rasteira de Costas',  cat:'Takedowns',       desc:'Spinning back sweep kick targeting the ankle.',                                             media:{ type:'gif', src:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Rasteira_de_Costa.gif' } },
  { id:'tesoura-frente', name:'Tesoura de Frente',   cat:'Takedowns',       desc:"Front scissors leg takedown — locking both legs around the opponent's leg." },
  { id:'tesoura-costas', name:'Tesoura de Costas',   cat:'Takedowns',       desc:'Back scissors leg takedown — scissors applied from behind.' },
  { id:'tesoura-angola', name:'Tesoura Angola',      cat:'Takedowns',       desc:'Prone scissors position advance — closing in on the opponent from the ground.' },
  { id:'tombo-ladeira',  name:'Tombo-de-Ladeira',    cat:'Takedowns',       desc:'Axe kick delivered from a cartwheel or rolê — "tumbling down the hill."' },
  { id:'vingativa',      name:'Vingativa',           cat:'Takedowns',       desc:"Low takedown trapping the opponent's back legs, often executed from close range." },

  // Acrobatics
  { id:'bananeira',      name:'Bananeira',           cat:'Acrobatics',      desc:'Handstand with eyes toward the opponent — used for positioning, balance, and display.' },
  { id:'s-dobrado',      name:'S-Dobrado',           cat:'Acrobatics',      desc:'Transitional series moving from a low position to an inverted (upside-down) one.' },
  { id:'macaco',         name:'Macaco',              cat:'Acrobatics',      desc:'Similar to a back handspring — launched from a low crouch. One of the signature acrobatics of capoeira.' },
  { id:'macaquinho',     name:'Macaquinho',          cat:'Acrobatics',      desc:'Smaller variation of the macaco — compact and closer to the ground.' },
  { id:'macaco-pe',      name:'Macaco em Pé',        cat:'Acrobatics',      desc:'Standing version of the macaco, performed from an upright position.' },
  { id:'macaco-lat',     name:'Macaco Lateral',      cat:'Acrobatics',      desc:'Side variation of the macaco — the flip goes sideways rather than backward.' },
  { id:'bandeira',       name:'Bandeira',            cat:'Acrobatics',      desc:'Advanced acrobatic display technique — the "flag."' },
  { id:'folha-seca',     name:'Folha Seca',          cat:'Acrobatics',      desc:'Falling leaf acrobatic movement — a controlled lateral spinning drop.' },
  { id:'folha-heli',     name:'Folha Seca Helicóptero', cat:'Acrobatics',   desc:'Spinning variation of the Folha Seca with additional helicopter rotation.' },
  { id:'chute-lua',      name:'Chute na Lua',        cat:'Acrobatics',      desc:'Kick to the moon — a high acrobatic kick.' },
  { id:'relogio',        name:'Relógio',             cat:'Acrobatics',      desc:'Spinning acrobatic technique — the "clock," rotating the body in a wide arc.' },
  { id:'piao-mao',       name:'Pião de Mão',         cat:'Acrobatics',      desc:'Hand spin — spinning on one or both hands, legs extended.' },
  { id:'piao-cabeca',    name:'Pião de Cabeça',      cat:'Acrobatics',      desc:'Headstand spin — spinning on the head, similar to a b-boy headstand spin.' },
  { id:'mortal',         name:'Mortal (Carpado)',     cat:'Acrobatics',      desc:'Tucked flip/somersault — a back or front flip with knees drawn to chest.' },
  { id:'mariposa',       name:'Mariposa',            cat:'Acrobatics',      desc:'Butterfly-like acrobatic movement — a side aerial or similar flowing sequence.' },
];
