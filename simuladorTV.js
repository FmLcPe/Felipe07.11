let ligada = false;
        let canalAtual = 0;
        let volumeAtual = 0;

        function ligarDesligar() {
            ligada = !ligada;
            document.getElementById('status').textContent = ligada ? 'Ligada' : 'Desligada';
            if (!ligada) {
                canalAtual = 0;
                volumeAtual = 0;
                document.getElementById('canal').textContent = 'Canal: 0';
                document.getElementById('volume').textContent = 'Volume: 0';
            }
        }

        function mudarCanal(delta) {
            if (ligada) {
                canalAtual += delta;
                canalAtual = Math.max(0, canalAtual); // Garante que o canal não seja negativo
                document.getElementById('canal').textContent = `Canal: ${canalAtual}`;
            }
        }

        function aumentarVolume() {
            if (ligada) {
                volumeAtual = Math.min(100, volumeAtual + 10); // Garante que o volume não ultrapasse 100
                document.getElementById('volume').textContent = `Volume: ${volumeAtual}`;
            }
        }

        function diminuirVolume() {
            if (ligada) {
                volumeAtual = Math.max(0, volumeAtual - 10); // Garante que o volume não seja negativo
                document.getElementById('volume').textContent = `Volume: ${volumeAtual}`;
            }
        }