<input id="search" placeholder="Search">
    <button onclick="search()">🔍</button>

    <script>
        function search(){
        let q = document.getElementById('search').value.toLowerCase();
        document.querySelectorAll('.video-card, .tile').forEach(el=>{
        let t = el.innerText.toLowerCase();
        el.style.display = t.includes(q) ? '' : 'none';
    });
    }
    </script>
