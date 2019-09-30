function cadastro(){

    Swal.fire({
        title: 'Obrigado pelo cadastro!',
        text: "Em breve um consultor entrará em contato com você",
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Navegar pelo site!'
      }).then((result) => {
        if (result.value) {
            window.location.assign("painel.html");

        }
      })

}
