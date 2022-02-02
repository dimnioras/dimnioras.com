<template>
  <div>
    <SiteBanner bannerTitle="Athens Public Transport Archive" bannerSize="20vh"></SiteBanner>
    <div class="container intro text-center text-dark">
			<div>
        <h2>Αρχείο Ιστορίας Αστικών Συγκοινωνιών της Αθήνας</h2>
				<p>Στη σελίδα αυτή θα βρείτε αρχείο χαρτών και φυλλαδίων σχετικών με την ιστορία των αστικών συγκοινωνιών της Αθήνας.
          Δημιούργησα το συγκεκριμένο αρχείο με σκοπό την υλοποίηση μιας ελεύθερης και προσβάσιμης ηλεκτρονικής συλλογής για όσους τους ενδιαφέρει
          ο συγκοινωνιακός σχεδιασμός και η ιστορική εξέλιξη του δικτύου της Αθήνας.</p>
          <p>Όλοι οι χάρτες και τα φυλλάδια έχουν σαρωθεί σε υψηλή ανάλυση (400 ppi) και εξαχθεί σε συμπιεσμένη μορφή εικόνας (jpeg). Φυλλάδια 
            πολλών σελίδων έχουν ενωθεί σε αρχεία pdf.</p>
          <p>Επικοινωνήστε μαζί μου εάν έχετε υλικό που μπορεί να εμπλουτίσει το αρχείο ή αν έχετε υπάρχον υλικό σε καλύτερη κατάσταση.</p>
          <p><b>Θα ήθελα να ευχαριστήσω τους παρακάτω, οι οποίοι βοήθησαν άμεσα ή έμμεσα σε αυτή την προσπάθεια:</b><br>
            <ul>
              <li>Νατάσα Ρήγου (Υπεύθυνη Βιβλιοθήκης ΟΑΣΑ</li>
              <li>Νάσος Κόκκινος (πρώην Συγκοινωνιολόγος ΟΑΣΑ)</li>
              <li>Κωνσταντίνος Αθανασόπουλος (Εθνικό Μετσόβιο Πολυτεχνείο)</li>
              <li>Περικλής Γεωργιόπουλος</li>
              <li>Χρήστος Σκαφίδας</li>
            </ul>
          </p>
          <p>Θα χαρώ πολύ να προστεθούν και νέα μέλη στην παραπάνω λίστα!</p>
				<hr>
        <h2>Athens Public Transport Archive</h2>
				<p>In this page you can find an archive of maps and brochures related to the history of public transport in Athens, Greece. 
          I created this with the goal of developing a free and accessible online collection for those interested in public transport network design 
          and the history and evolution of the Athens network over time.</p>
          <p>All maps and brochures have been scanned in high resolution (400 ppi) and exported to image files (jpeg). Multi-page 
          brochures have been combined into single pdf files.</p>
          <p>Feel free to contact me if you would like to help me enrich the archive with new materials or replace some with ones of better condition.</p>
          <p><b>I would like to thank the following, who helped directly or indirectly to this effort:</b><br>
            <ul>
              <li>Natassa Rigou (Library Manager of OASA (Athens Public Transport Organization))</li>
              <li>Nassos Kokkinos (former Transport Engineer at OASA)</li>
              <li>Konstantinos Athanassopoulos (National Technical University of Athens)</li>
              <li>Periklis Georgiopoulos</li>
              <li>Christos Skafidas</li>
            </ul>
          </p>
			</div>
		</div>
    <ArchiveCards />
  </div>
</template>

<script>
  import ArchiveCards from '../components/ArchiveCards'
  import SiteBanner from '../components/SiteBanner'

  export default {
    components: {
      ArchiveCards,
      SiteBanner
    }
  }
</script>

<style scoped>
  h2 {
    font-family: 'sans-serif';
  }
  p {
    font-family: 'sans-serif';
  }
</style>